import { Container } from "#atoms/container";
import { about } from "#data/about";
import { ContactMenu } from "#molecules/contact-menu";
import { Section } from "#molecules/section";
import { Divider } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const ContactPage: NextPage = () => {
	return (
		<>
			<NextSeo
				description={about.fullDescription}
				title="Наши контакты" />
			<Section>
				<Container>
					<Section.Header>
						<Title level={3}>
							{about.name} - {about.shortDescription}
						</Title>
					</Section.Header>
					<Section.Body>
						<Title level={4}>
							Наши контакты
						</Title>
						<ContactMenu theme="light" className="custom-menu" />
						<Divider />
						<Paragraph type="warning">Работаем только по городу Хабаровск с 9:00 до 21:00 ежедневно.</Paragraph>
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export default ContactPage;