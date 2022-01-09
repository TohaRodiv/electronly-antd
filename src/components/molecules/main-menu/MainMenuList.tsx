import { ListProps, List } from "antd";
import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { mainMenu } from "src/data/main-menu";
import styles from "./style.module.scss";
import { Space } from "#molecules/space";

type TProps = ListProps<any> & {
	icon?: ReactNode
	theme?: "light" | "dark"
}

const MainMenuList: FC<TProps> = ({
	className,
	icon,
	theme,
	...props
}) => {
	const classes = classNames(
		styles["main-menu-list"],
		{
			[styles[`main-menu-list--theme--${theme}`]]: !!theme,
		},
		className
	);

	return (
		<List
			className={classes} {...props}>
			{
				mainMenu.map((menuItem, indexItem) => (
					<List.Item key={`${menuItem.path}-${indexItem}`} className={styles["main-menu-list__item"]}>
						<Link href={menuItem.path} className={styles["main-menu-list__link"]}>
							<Space>
								{icon}
								{menuItem.title}
							</Space>
						</Link>
					</List.Item>
				))
			}
		</List>
	);
};

MainMenuList.defaultProps = {
	theme: "dark",
};

export { MainMenuList };