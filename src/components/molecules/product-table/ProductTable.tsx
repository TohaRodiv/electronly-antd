import { Link } from "#atoms/link";
import { PriceCompositor } from "#molecules/price-compositor";
import { TProducts } from "#types/products/TProducts";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { FC } from "react";

type TProps = {
	products: TProducts
}
const ProductTable: FC<TProps> = ({
	products,
}) => {
	
	const dataSource: any = products.map(product => {

		return {
			key: product.id,
			name: <Link href={`/products/${product.id}`}>{product.name}</Link>,
			price: <PriceCompositor primary={product.price} crossed={product.crossed_price} />,
		};
	});

	const columns: ColumnsType<any> = [
		{
			title: "Название",
			key: "name",
			dataIndex: "name",
		},
		{
			title: "Цена",
			key: "price",
			dataIndex: "price",
		},
	];

	return <Table dataSource={dataSource} columns={columns} pagination={false} />;
}

export {
	ProductTable
};