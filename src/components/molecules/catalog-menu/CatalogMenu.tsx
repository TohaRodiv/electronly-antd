import { Menu, MenuProps, message, Spin } from "antd";
import { FC, ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { ShopCategoryService } from "#services/frontend/api/ShopCategoryService";
import { TCategories } from "#types/categories/TCategories";
import { LoadingOutlined } from "@ant-design/icons";

type TProps = MenuProps & {
	icon?: ReactNode
}

const CatalogMenu: FC<TProps> = ({
	className,
	icon,
	...props
}) => {
	const classes = classNames(className);
	const [categories, setCategories] = useState<TCategories | null>(null);

	useEffect(() => {
		(async () => {
			const { payload, error, } = await ShopCategoryService.getMany();

			if (error) {
				message.error(`Произошла ошибка, зайдите на сайт позже. ${error.message}`);
			} else {
				setCategories(payload);
			}
		})();
	}, []);

	return (
		<Spin
			indicator={<LoadingOutlined />}
			spinning={!!!categories}>
			<Menu
				selectable={false}
				className={classes} {...props}>
				{
					categories && categories.map((category, menuIndex) => (
						<Menu.Item key={`${category.id}`} icon={icon}>
							<Link href={`/catalog/${category.id}`} text={category.title} />
						</Menu.Item>
					))
				}
			</Menu>
		</Spin>
	);
};

CatalogMenu.defaultProps = {
	theme: "light",
	mode: "inline",
};

export { CatalogMenu };