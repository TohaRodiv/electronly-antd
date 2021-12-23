import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Link } from "#atoms/link";
import { ThunderboltTwoTone } from "@ant-design/icons";
import { Space } from "antd";

type TProps = {
	className?: string
}

const AppLogo: FC <TProps> = ({
	className
}) => {
	const classes = classNames(styles["logo"], className);

	return (
		<Link href="/" className={classes}>
			<Space>
				<ThunderboltTwoTone />
				Electronly
			</Space>
		</Link>
	);
};

export { AppLogo };