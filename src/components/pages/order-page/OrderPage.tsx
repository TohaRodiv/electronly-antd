import { Container } from "#atoms/container";
import { ProductOrderForm } from "#molecules/product-order-form";
import { ProductThumb } from "#molecules/product-thumb";
import { Section } from "#molecules/section";
import { TProduct } from "#types/products/TProduct";
import { Row, Col } from "antd";
import { FC } from "react";

type TProps = {
	product: TProduct
}

const OrderPage: FC<TProps> = ({
	product,
}) => {

	return (
		<Section>
			<Container>
				<Section.Body>
					<Row align="middle" justify="center" gutter={[24, 12]}>
						<Col span={24} md={12} lg={8}>
							<ProductThumb product={product} hideOrder={true} />
						</Col>
						<Col span={24} md={12} lg={10}>
							<ProductOrderForm product={product} />
						</Col>
					</Row>
				</Section.Body>
			</Container>
		</Section>
	);
};

export { OrderPage };