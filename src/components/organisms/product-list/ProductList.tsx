import { ProductThumb } from "#organisms/product-thumb";
import { Space } from "antd";
import { FC } from "react";
import { TProducts } from "src/types/products/TProducts";
import styles from "./style.module.scss";

type TProps = {
	products: TProducts
}

const ProductList: FC<TProps> = ({
	products,
}) => {
	return (
		<Space wrap size="middle">
			{
				products.map((product) => (
					<ProductThumb product={product} key={product.id} />
				))
			}
		</Space>
	);
};

export { ProductList };