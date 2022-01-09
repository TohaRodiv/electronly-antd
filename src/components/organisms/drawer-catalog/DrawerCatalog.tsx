import { CatalogMenu } from "#molecules/catalog-menu";
import { Drawer, DrawerProps } from "antd";
import { FC } from "react";
import classNames from "classnames";
import { ThunderboltOutlined } from "@ant-design/icons";

type TProps = DrawerProps & {
	show: boolean
}

const DrawerCatalog: FC<TProps> = ({
	show,
	className,
	...props
}) => {
	const classes = classNames(className);

	return (
		<Drawer className={classes} {...props}>
			{
				show && <CatalogMenu className="custom-menu" icon={<ThunderboltOutlined />} />
			}
		</Drawer>
	);
};

DrawerCatalog.defaultProps = {
	width: 300,
	placement: "left",
	title: "Каталог",
};

export { DrawerCatalog };