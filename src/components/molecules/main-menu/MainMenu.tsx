import { Menu, MenuProps } from "antd";
import { FC } from "react";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { mainMenu } from "src/data/main-menu";

type TProps = MenuProps & {}

const MainMenu: FC<TProps> = ({
	className,
	...props
}) => {
	const classes = classNames(className);

	return (
		<Menu className={classes} {...props}>
			{
				mainMenu.map((menuItem, indexItem) => (
					<Menu.Item key={`${menuItem.path}-${indexItem}`}>
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
};

export { MainMenu };