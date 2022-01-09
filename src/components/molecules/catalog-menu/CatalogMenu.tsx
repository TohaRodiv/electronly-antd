import { List, ListProps, Spin } from "antd";
import { FC, ReactNode, } from "react";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";
import { Space } from "#molecules/space";
import { AppContext } from "src/context/AppContext";

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

	return (
		<AppContext.Consumer>
			{({ categories }) => (
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
			)}
		</AppContext.Consumer>
	);
};

CatalogMenu.defaultProps = {
	theme: "light",
};

export { CatalogMenu };