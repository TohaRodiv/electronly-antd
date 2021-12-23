import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { TProduct } from "src/types/products/TProduct";
import { Card, Divider } from "antd";
import Title from "antd/lib/typography/Title";
import { PriceCompositor } from "#molecules/price-compositor";

type TProps = {
	product: TProduct
	key?: React.Key
}

const ProductThumb: FC<TProps> = ({
	product,
	...props
}) => {

	const img = <img src={product.images[0].path} alt={product.name} />;

	return (
		<Card
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
			cover={img}
			{...props}>
			<Title level={4}>{product.name}</Title>
			<PriceCompositor primary={100} discount={20} />
		</Card>
	);
};

export { ProductThumb };