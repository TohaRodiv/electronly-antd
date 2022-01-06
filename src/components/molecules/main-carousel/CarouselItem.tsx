import { TBanner } from "#types/banner/TBanner";
import { FC } from "react";
import { Image } from "#atoms/image";
import styles from "./style.module.scss";
import classNames from "classnames";
import Title from "antd/lib/typography/Title";
import { Space } from "#molecules/space";
import { Button } from "antd";
import { ButtonScrollDown } from "#atoms/button-scroll-down";
import { Container } from "#atoms/container";
import { AlignLeftOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";


type TProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	banner: TBanner
	scrollTo?: string
};

const CarouselItem: FC<TProps> = ({
	banner,
	className,
	scrollTo,
	...props
}) => {

	const router = useRouter();

	const {
		id,
		title,
		subtitle,
		image,
	} = banner;

	const classes = classNames(styles["main-carousel-item"], className);

	return (
		<div className={classes} {...props}>
			<Image
				objectFit="cover"
				layout="fill"
				className={styles["main-carousel-item__image"]}
				alt={title}
				src={image} />
			<div className={styles["main-carousel-item__body"]}>
				<Container className={styles["main-carousel-item__body-container"]}>
					<div className={styles["main-carousel-item__body-inner"]}>
						<Title level={3} className={styles["main-carousel-item__title"]}>{title}</Title>
						{
							subtitle && (
								<div className={styles["main-carousel-item__subtitle"]}>{subtitle}</div>
							)
						}
						<Space justifyContent="center">
							<Button
								onClick={() => { router.push("/about") }}
								size="large"
								icon={<AlignLeftOutlined />}
								ghost>Подробнее</Button>
							<Button
								onClick={() => { router.push("/catalog") }}
								size="large"
								icon={<ShoppingOutlined />}>В каталог</Button>
						</Space>
					</div>
				</Container>
			</div>
			<div className={styles["main-carousel-item__scroll-down-icon"]}>
				<ButtonScrollDown classNameArrow={styles["main-carousel-item__scroll-item"]} scrollTo={scrollTo} />
			</div>
		</div>
	);
};

export { CarouselItem };