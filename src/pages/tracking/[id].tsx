import { Container } from "#atoms/container"
import { about } from "#data/about"
import { Empty } from "#molecules/empty"
import { Section } from "#molecules/section"
import { OrderService } from "#services/backend/api/shop/OrderService"
import { DateService } from "#services/frontend/date/DateService"
import { TOrder } from "#types/order/TOrder"
import { Descriptions, Tooltip } from "antd"
import Text from "antd/lib/typography/Text"
import Title from "antd/lib/typography/Title"
import { NextPage, NextPageContext } from "next"
import { NextSeo } from "next-seo"

type TProps = {
	order: TOrder | null
}

type TSProps = {
	props: TProps
}

const TrackingOrderPage: NextPage<TProps> = ({
	order,
}) => {
	return (
		<>
			<NextSeo
				noindex={true}
				description={about.fullDescription}
				title={order ? `Информация о заказе №${order.id}` : "Заказ не найден"}/>
			<Section>
				<Container>
					<Section.Header>
						{
							!order ? <Title level={3}>Заказ не найден</Title> : (
								<Title level={3}>Информация о заказе №{order?.id}</Title>
							)
						}
					</Section.Header>
					<Section.Body>
						{
							!order ? <Empty /> : (
								<Descriptions>
									<Descriptions.Item label="Номер заказа">
										{order.id}
									</Descriptions.Item>
									<Descriptions.Item label="Статус">
										<Tooltip title={order.status.description}>
											<Text>
												{order.status.name}
											</Text>
										</Tooltip>
									</Descriptions.Item>
									<Descriptions.Item label="Дата оформления">
										{DateService.getFormattedHuman(order.created)}
									</Descriptions.Item>
									{
										order.created != order.updated && (
											<Descriptions.Item label="Дата редактирования">
												{DateService.getFormattedHuman(order.updated)}
											</Descriptions.Item>
										)
									}
								</Descriptions>
							)
						}
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export const getServerSideProps = async (ctx: NextPageContext): Promise<TSProps> => {
	const props: TProps = {
		order: null,
	};

	const orderId = +(ctx.query && ctx.query.id || false);

	if (isFinite(orderId) && orderId > 0) {
		props.order = (await OrderService.findById(orderId)).payload;
	}

	console.log("order", props.order);

	return {
		props,
	};
};

export default TrackingOrderPage;