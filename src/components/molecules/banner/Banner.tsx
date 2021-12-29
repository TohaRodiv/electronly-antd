import { Link } from "#atoms/link";
import Title from "antd/lib/typography/Title";
import Image from "next/image";
import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type TSize = "small" | "middle" | "large"

type TProps = {
	image: any
	title?: string
	path: string
	className?: string
	size?: TSize
}

const getSizesByName = (size: TSize) => {
	if (size === "small") {
		return {
			width: 150,
			height: 100,
		};
	} else if (size === "middle") {
		return {
			width: 250,
			height: 200,
		};
	} else if (size === "large") {
		return {
			width: 350,
			height: 300,
		};
	} else {
		throw new Error("Unknown size type!");
	}
}

const Banner: FC<TProps> = ({
	image,
	title,
	path,
	className,
	size,
}) => {
	const classes = classNames(styles["banner"], styles[`banner--size--${size}`], className);

	return (
		<Link href={path} className={classes}>
			<Image
				src={image}
				className={styles["banner__image"]} />
			<div className={styles["banner__body"]}>
				<div>
					{
						title && <Title level={4} className={styles["banner__title"]}>{title}</Title>
					}
				</div>
			</div>
		</Link>
	);
};

Banner.defaultProps = {
	size: "middle",
};

export { Banner };