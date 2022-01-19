import { validateMessages } from "#data/validate-messages";
import { CreateOrderDTO } from "#services/dto/CreateOrderDTO";
import { OrderService } from "#services/frontend/api/OrderService";
import { getPreparedFields } from "#services/frontend/form/getPreparedFields";
import { TOrder } from "#types/order/TOrder";
import { MailOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, Input, message, Spin } from "antd";
import { FC, useState } from "react"
import ReactInputMask from "react-input-mask";

type TProps = FormProps

const CallbackForm: FC<TProps> = ({
	...props
}) => {

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (fields: any) => {
		setLoading(true);

		const data = getPreparedFields(fields) as CreateOrderDTO;
		const { error, payload }: { error: any, payload: TOrder } = await OrderService.createAndSave(data);

		if (error) {
			console.error(error);
			message.error("Произошла ошибка, повторите позже.");
		} else {
			message.success("Ваша заявка успешно отправлена!");
		}
		
		setLoading(false);
	};

	return (
		<Spin spinning={loading}>
			<Form
				validateMessages={validateMessages}
				onFinish={handleSubmit}
				layout="vertical"
				{...props}>
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
					<ReactInputMask
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
					label="Сообщение">
					<Input.TextArea
						showCount={true}
						allowClear={true} />
				</Form.Item>
				<Form.Item>
					<Button
						block
						size="large"
						icon={<MailOutlined />}
						type="primary"
						htmlType="submit">
						Заказать
					</Button>
				</Form.Item>
			</Form>
		</Spin>
	);
};

export {
	CallbackForm
};