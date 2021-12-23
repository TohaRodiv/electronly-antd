import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

type TType = "primary" | "crossed" | "discount" | "order"

type TProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
	size?: "small" | "middle" | "large"
	type?: TType
	value: number
}

const getFormattedPrice = (price: number, type: TType): string => {
	switch(type) {
		case "primary":
		case "crossed":
			return `${price} ₽`;

		case "discount":
			return `${price} %`;
		
		case "order":
			return "По запросу";
		
		default:
			throw new Error(`Price type "${type}" is not supported!`);
	}
}

const Price: FC<TProps> = ({
	size,
	type,
	value,
	className,
	...props
}) => {
	const classes = classNames(
		styles["price"],
		styles[`price--size--${size}`],
		styles[`price--type--${type}`],
		className,
	);

	return (
		<span className={classes} {...props}>
			{getFormattedPrice(value, type as TType)}
		</span>
	);
};

Price.defaultProps = {
	size: "middle",
	type: "primary",
}

export { Price };