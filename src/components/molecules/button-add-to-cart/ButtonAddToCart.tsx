import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/button";
import { FC } from "react";

type TProps = ButtonProps;

const ButtonAddToCart: FC<TProps> = ({
	...props
}) => {
	return (
		<Button {...props}>
			В корзину 
		</Button>
	);
};

ButtonAddToCart.defaultProps = {
	icon: <ShoppingCartOutlined key="button-add-to-cart" />,
	size: "large",
	ghost: true,
	type: "primary",
};

export { ButtonAddToCart };