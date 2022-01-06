import { FC } from "react";
import styles from "./style.module.scss";
import { TProduct } from "src/types/products/TProduct";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { PriceCompositor } from "#molecules/price-compositor";
import { AvailabilityCompositor } from "#molecules/availability-compositor";
import { ButtonGoToOrder } from "#molecules/button-go-to-order";
import { useRouter } from "next/router";
import { Link } from "#atoms/link";
import { CategoryLink } from "#molecules/category-link";
import { Image } from "#atoms/image";

type TProps = {
	product: TProduct
	key?: React.Key
	hideOrder?: boolean
}

const ProductThumb: FC<TProps> = ({
	product,
	hideOrder,
	...props
}) => {
	const router = useRouter();

	const img = (
		<Link href={`/product/${product.id}`}>
			{/* <img src={product.images[0].path} alt={product.name} className={styles["product-thumb__image"]} /> */}
			<Image
				objectFit="contain"
				width={320}
				height={200}
				src={product.images[0].path}
				alt={product.name}
				className={styles["product-thumb__image"]} />
		</Link>
	);

	const handleGoToOrder = (productId: number) => {
		router.push(`/order/${productId}`);
	};

	const actions = [];

	if (!hideOrder) {
		actions.push(<ButtonGoToOrder key="product-thumb-image" onClick={() => { handleGoToOrder(product.id); }} />);
	}

	return (
		<Card
			bodyStyle={{ flex: "1 1 auto", }}
			className={styles["product-thumb"]}
			actions={actions}
			cover={img}
			{...props}>
			<div className={styles["product-thumb__body-inner"]}>
				<Title level={4} className={styles["product-thumb__title"]}>
					<Link href={`/product/${product.id}`} className={styles["product-thumb__title-link"]}>
						{product.name}
					</Link>
				</Title>
				<CategoryLink category={product.category} />
				<PriceCompositor primary={product.price} crossed={product.crossed_price} />
				<AvailabilityCompositor count={product.count} available={product.available} />
			</div>
		</Card>
	);
};

export { ProductThumb };