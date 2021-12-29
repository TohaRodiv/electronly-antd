import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { BlockOutlined, FrownOutlined, MailOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { TProductCount } from "src/types/products/TProductCount";
import { TAvailabilityType } from "src/types/products/TAvailabilityType";

type TProps = React.HTMLAttributes<HTMLDivElement> & {
	count: TProductCount
	type: TAvailabilityType
}

const Availability: FC<TProps> = ({
	count,
	type: availabilityType,
	className,
	...props
}) => {
	const classes = classNames(styles["availability"]);


	if (availabilityType === "in-stock") {
		return (
			<Space className={classNames(classes, styles["availability--in-stock"], className)} {...props}>
				<BlockOutlined />
				<span>
					{
						count === null ? "В наличии" : `В наличии ${count} шт.`
					}
				</span>
			</Space>
		);
	} else if (availabilityType === "out-stock") {
		return (
			<Space className={classNames(classes, styles["availability--out-stock"], className)} {...props}>
				<FrownOutlined />
				<span>
					{"Нет в наличии"}
				</span>
			</Space>
		);
	} else if (availabilityType === "under-order") {
		return (
			<Space className={classNames(classes, styles["availability--under-order"], className)} {...props}>
				<MailOutlined />
				<span>
					{"Под заказ"}
				</span>
			</Space>
		);
	} else {
		throw new Error(`Unknown availability type: "${availabilityType}"`);
	}
};

export { Availability };