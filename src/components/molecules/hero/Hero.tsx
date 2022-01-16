import { ButtonScrollDown } from "#atoms/button-scroll-down";
import { Container } from "#atoms/container";
import { Image } from "#atoms/image";
import { about } from "#data/about";
import { Space } from "#molecules/space";
import { AlignLeftOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import router from "next/router";
import { FC } from "react"
import styles from "./style.module.scss";

type TProps = {
	scrollTo: string
}

const Hero: FC<TProps> = ({
	scrollTo,
}) => {
	return (
		<div className={styles["hero"]}>
			<Container>
				<div className={styles["hero__row"]}>
					<div className={styles["hero__content"]}>
						<h2 className={styles["hero__head"]}>{about.shortDescription}</h2>
						<div className={styles["hero__description"]}>{about.fullDescription}</div>
						<Space className={styles["hero__cta"]}>
							<Button
								onClick={() => { router.push("/about") }}
								size="large"
								icon={<AlignLeftOutlined />}
								type="primary"
								ghost>
								Подробнее
							</Button>
							<Button
								type="primary"
								onClick={() => { router.push("/catalog") }}
								size="large"
								icon={<ShoppingOutlined />}>В каталог</Button>
						</Space>
					</div>
					<div className={styles["hero__image-wrapper"]}>
						<Image
							width={500}
							height={400}
							src="/workspace.svg" />
					</div>
				</div>
			</Container>
			<ButtonScrollDown className={styles["hero__scroll-down"]} scrollTo={scrollTo} />
		</div>
	);
};

export {
	Hero
};