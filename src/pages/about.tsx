import { Container } from "#atoms/container";
import { about } from "#data/about";
import { Section } from "#molecules/section";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
	return (
		<>
			<NextSeo
				description={about.fullDescription}
				title="О нас" />
			<Section theme="light">
				<Container>
					<Section.Header>
						<Title level={3}>
							{about.name} - {about.shortDescription}
						</Title>
					</Section.Header>
					<Section.Body>
						<Paragraph>
							Продажа электроники оптом и в розницу: ноутбуки, умные часы, фитнес-браслеты, смартфоны и аксессуары от USB провода до наушников. Наш ассортимент товаров постоянно пополняется новыми предложениями, а цены всегда актуальные и постоянно проводятся скидки на разную электронику. Мы предлагаем товары разного состояния (от б/у до новых от проверенных поставщиков). На наши товары даем гарантию. Также занимаемся скупкой электроники.
						</Paragraph>
						<Paragraph type="warning">Работаем только по городу Хабаровск с 9:00 до 21:00 ежедневно.</Paragraph>
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export default AboutPage;