import { validateMessages } from "#data/validate-messages";
import { SearchOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/router";
import { FC } from "react"
import classNames from "classnames";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ButtonType } from "antd/lib/button";
import styles from "./style.module.scss";

type TProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	size?: SizeType
	buttonType?: ButtonType
	theme?: "dark" | "light"
}

const TrackingOrderForm: FC<TProps> = ({
	className,
	size,
	theme,
	...props
}) => {
	const router = useRouter();

	const handleSearchOrder = (data: any) => {
		router.push(`/tracking/${data.orderId}`);
	};

	const localValidateMessages = {
		...validateMessages,
		required: "Это поле обязательно!",
	}

	const classes = classNames(styles["tracking-order-form"], className);
	const buttonType: ButtonType = theme === "light" ? "default" : "primary";

	return (
		<div className={classes} {...props}>
			<Form onFinish={handleSearchOrder} validateMessages={localValidateMessages}>
				<Form.Item
					className={styles["tracking-order-form__form-item"]}
					name="orderId"
					rules={[{ type: "string", min: 1, required: true, }]}>
					<div className={styles["tracking-order-form__inner"]}>
						<Input
							className={styles["tracking-order-form__input-order"]}
							type="string"
							placeholder="Введите номер заказа"
							size={size} />
						<Button
							className={styles["tracking-order-form__submit"]}
							size={size}
							htmlType="submit"
							icon={<SearchOutlined />}
							type={buttonType}
							ghost>Найти</Button>
					</div>
				</Form.Item>
			</Form>
		</div>
	);
};

TrackingOrderForm.defaultProps = {
	size: "middle",
	theme: "light",
};

export {
	TrackingOrderForm
};