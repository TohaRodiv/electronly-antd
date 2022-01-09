import { ProductList } from "#molecules/product-list";
import { ProductTable } from "#molecules/product-table";
import { DateService } from "#services/frontend/date/DateService";
import { TOrder } from "#types/order/TOrder";
import { Badge, Descriptions, Table, Tooltip } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { FC } from "react";

type TProps = {
	order: TOrder
}

const DescriptionOrder: FC<TProps> = ({
	order
}) => {
	return (
		<>
			<Paragraph type="success">
				Ваш заказ оформлен под номером <Text underline copyable={{ text: `${order.id}`, tooltips: false, }}>№{order.id}</Text>, скопируйте его и отслеживайте статус заказа на нашем сайте.
			</Paragraph>
			<Descriptions title="Информация о заказе">
				<Descriptions.Item label="Номер заказа">
					<Text copyable={{ text: `${order.id}`, tooltips: false, }}>
						{order.id}
					</Text>
				</Descriptions.Item>
				<Descriptions.Item label="Имя">
					{order.fio}
				</Descriptions.Item>
				<Descriptions.Item label="Телефон">
					{order.tel}
				</Descriptions.Item>
				<Descriptions.Item label="E-mail">
					{order.email}
				</Descriptions.Item>
				<Descriptions.Item label="Комментарий">
					{order.comment}
				</Descriptions.Item>
				<Descriptions.Item label="Дата оформления">
					{DateService.getFormattedHuman(order.created)}
				</Descriptions.Item>
				<Descriptions.Item label="Статус">
					<Tooltip title={order.status.description}>
						<Text>
							{order.status.name}
						</Text>
					</Tooltip>
				</Descriptions.Item>
			</Descriptions>
			<Title level={3}>Товары</Title>
			<ProductTable products={order.products} />
		</>
	);
};

export {
	DescriptionOrder
};