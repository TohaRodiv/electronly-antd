import { List, ListProps, Spin } from "antd";
import { FC, ReactNode, } from "react";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";
import { Space } from "#molecules/space";
import { useShopCategories } from "#hooks/useShopCategories";

type TProps = ListProps<any> & {
	icon?: ReactNode
	theme?: "light" | "dark"
}

const CatalogMenu: FC<TProps> = ({
	className,
	icon,
	theme,
	...props
}) => {
	const classes = classNames(
		styles["catalog-menu"],
		{
			[styles[`catalog-menu--theme--${theme}`]]: !!theme,
		},
		className
	);

	const { categories } = useShopCategories();

	return (
		<Spin
			indicator={<LoadingOutlined />}
			spinning={!!!categories}>
			<List
				className={classes}
				{...props}>
				{
					categories && categories.map((category) => (
						<List.Item key={`category-${category.id}`} className={styles["catalog-menu__item"]}>
							<Link href={`/catalog/${category.id}`} className={styles["catalog-menu__link"]}>
								<Space>
									{icon}
									{category.title}
								</Space>
							</Link>
						</List.Item>
					))
				}
			</List>
		</Spin>
	);
};

CatalogMenu.defaultProps = {
	theme: "light",
};

export { CatalogMenu };