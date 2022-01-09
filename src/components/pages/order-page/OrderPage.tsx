import { Container } from "#atoms/container";
import { about } from "#data/about";
import { DescriptionOrder } from "#molecules/description-order";
import { Empty } from "#molecules/empty";
import { ProductOrderForm } from "#molecules/product-order-form";
import { ProductThumb } from "#molecules/product-thumb";
import { Section } from "#molecules/section";
import { TOrder } from "#types/order/TOrder";
import { TProduct } from "#types/products/TProduct";
import { Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import { NextSeo } from "next-seo";
import { FC, useState } from "react";

type TProps = {
	product: TProduct | null
}

const OrderPage: FC<TProps> = ({
	product,
}) => {
	const [order, setOrder] = useState<TOrder | null>(null);

	const handleOrderSuccess = (order: TOrder) => {
		setOrder(order);
	};

	return (
		<>
			{
				!product ? (
					<>
						<NextSeo
							noindex={true}
							description={about.fullDescription}
							title="Товар не найден" />
						<Section>
							<Container>
								<Section.Body>
									<Empty description="Товар не найден!" />
								</Section.Body>
							</Container>
						</Section>
					</>
				) : (
					<>
						<NextSeo
							titleTemplate={`%s заказать онлайн в интернет-магазине ${about.name}`}
							description={about.fullDescription}
							title={product.name} />
						<Section>
							<Container>
								<Section.Header>
									<Title level={3}>
										{
											order ? `Ваш заказ успешно оформлен` : "Оформление быстрого заказа"
										}
									</Title>
								</Section.Header>
								<Section.Body>
									{
										order ? <DescriptionOrder order={order} /> : (
											<Row align="middle" justify="center" gutter={[24, 12]}>
												<Col span={24} md={12} lg={8}>
													<ProductThumb product={product} hideOrder={true} />
												</Col>
												<Col span={24} md={12} lg={10}>
													<ProductOrderForm product={product} onOrder={handleOrderSuccess} />
												</Col>
											</Row>
										)
									}
								</Section.Body>
							</Container>
						</Section>
					</>
				)
			}
		</>
	);
};

export { OrderPage };