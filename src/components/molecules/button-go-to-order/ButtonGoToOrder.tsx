import { MailOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/button";
import { FC } from "react";

type TProps = ButtonProps;

const ButtonGoToOrder: FC<TProps> = ({
	...props
}) => {
	return (
		<Button {...props}>
			Заказать
		</Button>
	);
};

ButtonGoToOrder.defaultProps = {
	icon: <MailOutlined key="button-go-to-order" />,
	size: "large",
	ghost: true,
	type: "primary",
};

export { ButtonGoToOrder };