import { ProductThumb } from "#molecules/product-thumb";
import { FC } from "react";
import { TProducts } from "src/types/products/TProducts";
import styles from "./style.module.scss";

type TProps = {
	products: TProducts
}

const ProductList: FC<TProps> = ({
	products,
	...props
}) => {
	return (
		<div className={styles["product-list"]}>
			{
				products.map((product) => (
					<ProductThumb product={product} key={product.id} className={styles["product-list__item"]} />
				))
			}
		</div>
	);
};

export { ProductList };