import { Menu, MenuProps } from "antd";
import { FC } from "react";
import classNames from "classnames";
import { catalogMenu } from "src/data/catalog-menu";
import { Link } from "#atoms/link";

type TProps = MenuProps & {}

const CatalogMenu: FC<TProps> = ({
	className,
	...props
}) => {
	const classes = classNames(className);

	return (
		<Menu className={classes} {...props}>
			{
				catalogMenu.map((menuItem, menuIndex) => (
					<Menu.Item key={`${menuItem.path}-${menuIndex}`}>
						<Link href={menuItem.path} text={menuItem.title} />
					</Menu.Item>
				))
			}
		</Menu>
	);
};

CatalogMenu.defaultProps = {
	theme: "light",
	mode: "inline",
};

export { CatalogMenu };