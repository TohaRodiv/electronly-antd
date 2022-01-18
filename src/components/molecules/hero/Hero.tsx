import { ButtonScrollDown } from "#atoms/button-scroll-down";
import { Container } from "#atoms/container";
import { about } from "#data/about";
import { Space } from "#molecules/space";
import { AlignLeftOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import router from "next/router";
import { FC } from "react"
import styles from "./style.module.scss";
import WorkspaceImage from "./../../../../public/workspace.svg";
import Image from "next/image";
import { AppLogo } from "#molecules/app-logo";

type TProps = {}

const Hero: FC<TProps> = ({
}) => {
	return (
		<div className={styles["hero"]}>
			<Container>
				<div className={styles["hero__row"]}>
					<div className={styles["hero__content"]}>
						<div className={styles["hero__image-wrapper-mobile"]}>
							<Image
								alt={about.name}
								width={220}
								height={220}
								src={WorkspaceImage} />
						</div>
						<AppLogo className={styles["hero__app-logo"]} />
						<h2 className={styles["hero__head"]}>{about.shortDescription}</h2>
						<div className={styles["hero__description"]}>{about.fullDescription}</div>
						<Space className={styles["hero__cta"]}>
							<Button
								onClick={() => { router.push("/about") }}
								size="large"
								icon={<AlignLeftOutlined />}
								type="default"
								ghost>
								Подробнее
							</Button>
							<Button
								type="default"
								onClick={() => { router.push("/catalog") }}
								size="large"
								icon={<ShoppingOutlined />}>В каталог</Button>
						</Space>
					</div>
					<div className={styles["hero__image-wrapper"]}>
						<Image
							alt={about.name}
							width={600}
							height={600}
							src={WorkspaceImage} />
					</div>
				</div>
			</Container>
			<ButtonScrollDown className={styles["hero__scroll-down"]} />
		</div>
	);
};

export {
	Hero
};