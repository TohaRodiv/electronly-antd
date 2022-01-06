import { Menu, MenuProps } from "antd";
import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { mainMenu } from "src/data/main-menu";
import { MoreOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";

type TProps = MenuProps & {
	icon?: ReactNode
}

const MainMenu: FC<TProps> = ({
	className,
	icon,
	...props
}) => {
	const classes = classNames(styles["main-menu"], className);

	return (
		<Menu
			selectable={false}
			className={classes} {...props}>
			{
				mainMenu.map((menuItem, indexItem) => (
					<Menu.Item key={`${menuItem.path}-${indexItem}`} icon={icon}>
						<Link href={menuItem.path} text={menuItem.title} />
					</Menu.Item>
				))
			}
		</Menu>
	);
};

MainMenu.defaultProps = {
	theme: "dark",
	mode: "horizontal",
	overflowedIndicator: <MoreOutlined className={styles["main-menu__icon--collapsed"]} />,
};

export { MainMenu };