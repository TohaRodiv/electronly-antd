import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { TProduct } from "src/types/products/TProduct";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { PriceCompositor } from "#molecules/price-compositor";
import { AvailabilityCompositor } from "#molecules/availability-compositor";
import { ButtonGoToOrder } from "#molecules/button-go-to-order";
import { useRouter } from "next/router";
import { Link } from "#atoms/link";

type TProps = {
	product: TProduct
	key?: React.Key
}

const ProductThumb: FC<TProps> = ({
	product,
	...props
}) => {
	const router = useRouter();

	const img = (
		<Link href={`/product/${product.id}`}>
			<img src={product.images[0].path} alt={product.name} className={styles["product-thumb__image"]} />
		</Link>
	);

	const handleGoToOrder = (productId: number) => {
		router.push(`/order/${productId}`);
	};

	return (
		<Card
			bodyStyle={{ flex: "1 1 auto" }}
			className={styles["product-thumb"]}
			actions={[<ButtonGoToOrder key="product-thumb-image" onClick={() => { handleGoToOrder(product.id); }} />]}
			cover={img}
			{...props}>
			<Title level={4}>
				<Link href={`/product/${product.id}`}>
					{product.name}
				</Link>
			</Title>
			<PriceCompositor primary={product.price} crossed={product.crossedPrice} />
			<br />
			<AvailabilityCompositor count={product.count} available={product.available} />
		</Card>
	);
};

export { ProductThumb };