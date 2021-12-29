import { NewsThumb } from "#molecules/news-thumb";
import { FC } from "react";
import { TArticles } from "src/types/articles/TArticles";
import styles from "./style.module.scss";

type TProps = {
	news: TArticles
}

const NewsList: FC<TProps> = ({
	news,
}) => {
	return (
		<div className={styles["news-list"]}>
			{
				news.map((article) => (
					<NewsThumb news={article} key={article.id} />
				))
			}
		</div>
	);
};

export { NewsList };