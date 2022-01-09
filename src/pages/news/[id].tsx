import { NewsService } from "#services/backend/api/blog/NewsService";
import { TArticle } from "#types/articles/TArticle";
import { NextPage, NextPageContext } from "next";
import { NewsPage } from "src/components/pages/news-page";

type TProps = {
	news: TArticle | null
}

type TSProps = {
	props: TProps
}

const NextNewsPage: NextPage<TProps> = ({
	news,
}) => {
	return news && <NewsPage news={news} />;
};

export const getServerSideProps = async (ctx: NextPageContext): Promise<TSProps> => {
	const props: TProps = {
		news: null,
	};

	const articleId = +(ctx.query && ctx.query.id || false);

	if (isFinite(articleId) && articleId > 0) {
		props.news = (await NewsService.findById(articleId)).payload;
	}

	return {
		props,
	};
};

export default NextNewsPage;