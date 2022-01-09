import { Container } from "#atoms/container";
import { about } from "#data/about";
import { Section } from "#molecules/section";
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
							Electronly - интернет-магазин электроники
						</Title>
					</Section.Header>
					<Section.Body>
						<p>
							Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заглавных они рот раз рекламных агентство ведущими снова, это речью власти, точках страну приставка, проектах запятых города своих родного оксмокс гор. Продолжил?
						</p>
						<p>
							Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Города, подпоясал. Имеет встретил текст пояс домах, послушавшись имени вопроса выйти взгляд текста своего. Даль свой всемогущая, злых реторический силуэт маленькая по всей это правилами несколько рот страну встретил они живет гор точках, там над ты заманивший возвращайся раз выйти коварных. Пор текст снова правилами составитель парадигматическая.
						</p>
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export default AboutPage;