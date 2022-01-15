import { Container } from "#atoms/container"
import { about } from "#data/about"
import { NewsList } from "#molecules/news-list"
import { Section } from "#molecules/section"
import { NewsService } from "#services/backend/api/blog/NewsService"
import { TArticles } from "#types/articles/TArticles"
import Title from "antd/lib/typography/Title"
import { GetStaticProps, NextPage, NextPageContext } from "next"
import { NextSeo } from "next-seo"

type TProps = {
	news: TArticles | null
}

type TSProps = {
	props: TProps
}

const NewsPage: NextPage<TProps> = ({
	news,
}) => {
	return (
		<>
			<NextSeo
				description={about.fullDescription}
				title="Новости" />
			<Section>
				<Container>
					<Section.Header>
						<Title level={3}>Новости</Title>
					</Section.Header>
					<Section.Body>
						{
							news && (
								<NewsList news={news} />
							)
						}
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	
	const props: TProps = {
		news: null,
	};

	props.news = (await NewsService.getMany()).payload;

	return {
		props,
		revalidate: 60 * 60,
	};
};

export default NewsPage;