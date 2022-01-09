import { Container } from "#atoms/container";
import { AvailabilityCompositor } from "#molecules/availability-compositor";
import { ButtonGoToOrder } from "#molecules/button-go-to-order";
import { CategoryLink } from "#molecules/category-link";
import { ImagePreviewMask } from "#molecules/image-preview-mask";
import { PriceCompositor } from "#molecules/price-compositor";
import { Space } from "#molecules/space";
import { TProduct } from "#types/products/TProduct";
import { Col, Divider, Image, Row } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./style.module.scss";
import { Section } from "#molecules/section";
import { NextSeo, ProductJsonLd } from "next-seo";
import { StringService } from "#services/frontend/string/StringService";
import { about } from "#data/about";

type TProps = {
	product: TProduct
}

/**
 * @see https://github.com/garmeeh/next-seo#product
 */
const ProductPage: FC<TProps> = ({
	product
}) => {

	const {
		id,
		name,
		description,
		images,
		count,
		price,
		crossed_price,
		available,
		category,
	} = product;

	const router = useRouter();

	const handleGoToOrder = (productId: number) => {
		router.push(`/order/${productId}`);
	};

	return (
		<>
			<NextSeo
				titleTemplate={`%s купить в интернет-магазине ${about.name}`}
				description={StringService.cutEllipsisText(product.description, 300)}
				title={product.name} />
			<ProductJsonLd
				offers={[
					{
						price: `${product.price}`,
						priceCurrency: "RUB",
						itemCondition: "https://schema.org/UsedCondition",
						availability: product.available ?
							product.crossed_price ?
								"https://schema.org/Discontinued" :
								"https://schema.org/InStock" :
							"https://schema.org/OutOfStock",
						url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/product/${product.id}`,
						seller: {
							name: `${about.name} - ${about.shortDescription}`,
						}
					}
				]}
				description={StringService.cutEllipsisText(product.description, 300)}
				images={product.images.map(image => image.path)}
				productName={product.name} />
			<Section>
				<Container>
					<Section.Body>
						<div className={styles["product-page"]}>
							<Row gutter={24}>
								<Col span={24} sm={12}>
									<Image
										preview={{
											mask: <ImagePreviewMask />
										}}
										alt={name}
										src={images[0].path} />
								</Col>
								<Col span={24} sm={12}>
									<Title level={3}>{product.name}</Title>
									<Space>
										<PriceCompositor primary={price} crossed={crossed_price} />
										<ButtonGoToOrder ghost={false} onClick={() => { handleGoToOrder(id); }} />
									</Space>
									<Divider />
									<div>
										Категория: <CategoryLink category={category} icon={null} />
									</div>
									<AvailabilityCompositor available={available} count={count} />
								</Col>
							</Row>
							{
								description && (
									<>
										<Divider />
										<Title level={4}>Описание</Title>
										<Paragraph>
											{description}
										</Paragraph>
									</>
								)
							}
						</div>
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export {
	ProductPage
};