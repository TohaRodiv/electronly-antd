import { validateMessages } from "#data/validate-messages";
import { CreateOrderDTO } from "#services/dto/CreateOrderDTO";
import { OrderService } from "#services/frontend/api/OrderService";
import { getPreparedFields } from "#services/frontend/form/getPreparedFields";
import { TOrder } from "#types/order/TOrder";
import { TProduct } from "#types/products/TProduct";
import { ThunderboltOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";
import { FC, useState } from "react";
import InputMask from "react-input-mask";

type TProps = {
	product: TProduct
	onOrder?: (order: TOrder) => void
}

const ProductOrderForm: FC<TProps> = ({
	product,
	onOrder,
}) => {

	const [loading, setLoading] = useState(false);

	const onFinish = async (fields: any) => {
		setLoading(true);

		const data = getPreparedFields(fields) as CreateOrderDTO;
		const { error, payload }: { error: any, payload: TOrder } = await OrderService.createAndSave(data);

		if (error) {
			message.error("Произошла ошибка:", error);
		} else {
			message.success("Ваша заявка успешно отправилась!");
			onOrder && onOrder(payload);
		}

		setLoading(false);
	};

	return (
		<Form
			name="product-order-form"
			onFinish={onFinish}
			validateMessages={validateMessages}
			layout="vertical">
			<Form.Item
				hidden
				initialValue={[product.id]}
				name="products">
				<Input type="hidden" />
			</Form.Item>
			<Form.Item
				hidden
				initialValue={1}
				name="status">
				<Input type="hidden" />
			</Form.Item>
			<Form.Item
				name="fio"
				label="Ваше имя"
				rules={[{ min: 2 }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name="tel"
				label="Телефон"
				rules={[{
					pattern: /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/,
					type: "string",
					required: true,
				}]}>
				<InputMask
					mask="+7 (999) 999-99-99"
					name="tel"
					type="text"
					className="ant-input" />
			</Form.Item>
			<Form.Item
				name="email"
				label="Email"
				rules={[{ type: "email" }]}>
				<Input />
			</Form.Item>
			<Form.Item
				name="comment"
				label="Комментарий">
				<Input.TextArea
					showCount={true}
					allowClear={true} />
			</Form.Item>
			<Form.Item>
				<Button
					loading={loading}
					size="large"
					icon={<ThunderboltOutlined />}
					type="primary"
					htmlType="submit">
					Заказать
				</Button>
			</Form.Item>
		</Form>
	);
};

export { ProductOrderForm };