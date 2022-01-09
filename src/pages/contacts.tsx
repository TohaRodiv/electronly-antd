import { Container } from "#atoms/container";
import { about } from "#data/about";
import { ContactMenu } from "#molecules/contact-menu";
import { Section } from "#molecules/section";
import { Divider } from "antd";
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
						<p>
							Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Букв осталось, океана своих до текста, коварных несколько подпоясал правилами по всей однажды предупреждал живет использовало заглавных повстречался собрал, страну предложения моей одна? Ipsum даль правилами, наш домах силуэт послушавшись, несколько семь выйти меня всемогущая над образ. Раз переписали моей ведущими сих жаренные но предложения, языком грамматики о собрал силуэт проектах своих злых безопасную путь речью. Ручеек даль правилами города своих от всех предупреждал буквоград сих заголовок. Свое осталось, рыбного рот он пояс использовало, домах первую напоивший диких продолжил своего.
						</p>
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export default ContactPage;