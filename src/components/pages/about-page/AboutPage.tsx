import { Container } from "#atoms/container";
import { about } from "#data/about";
import { FC } from "react"
import styles from "./style.module.scss";
import WorkspaceImage from "./../../../../public/images/workspace.svg";
import Image from "next/image";
import { AppLogo } from "#molecules/app-logo";
import Paragraph from "antd/lib/typography/Paragraph";
import { AlignLeftOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import router from "next/router";

type TProps = {}

const AboutPage: FC<TProps> = ({
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
						<div className={styles["hero__description"]}>
						Российский интернет-магазин, специализирующийся на оптовой и розничной продаже электроники и комплектующих отечественного и зарубежного производства. Наш ассортимент товаров постоянно пополняется новыми предложениями, а цены всегда актуальные и постоянно проводятся скидки и акции. Мы предлагаем товары разного состояния (от б/у до новых от проверенных поставщиков). Даём гарантию на наши товары. Также занимаемся скупкой электроники.
						</div>
						<Paragraph type="warning" className={styles["hero__worktime"]}>Работаем по городу Хабаровск с 9:00 до 21:00 ежедневно.</Paragraph>
						<Space className={styles["hero__cta"]}>
							<Button
								onClick={() => { router.push("/ask-question") }}
								size="large"
								icon={<AlignLeftOutlined />}
								type="default"
								ghost>
								Оставить заявку
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
		</div>
	);
};

export {
	AboutPage
};