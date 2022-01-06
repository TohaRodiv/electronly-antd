import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "#atoms/link";
import { TArticle } from "src/types/articles/TArticle";
import { AlignLeftOutlined } from "@ant-design/icons";
import { Image } from "#atoms/image";

type TProps = {
	news: TArticle
	key?: React.Key
}

const NewsThumb: FC<TProps> = ({
	news,
	...props
}) => {

	const img = (
		<Link href={`/news/${news.id}`} className={styles["news-thumb__image-link"]}>
			{/* <img src={news.images[0].path} alt={news.title} className={styles["news-thumb__image"]} /> */}
			<Image
				width={360}
				height={200}
				objectFit="cover"
				src={news.images[0].path}
				alt={news.title}
				className={styles["news-thumb__image"]} />
		</Link>
	);

	return (
		<Card
			bodyStyle={{ flex: "1 1 auto" }}
			className={styles["news-thumb"]}
			actions={[<Link href={`/news/${news.id}`} key="news-thumb-image"><AlignLeftOutlined /> Подробнее</Link>]}
			cover={img}
			{...props}>
			<Title level={4} className={styles["news-thumb__title"]}>
				<Link href={`/news/${news.id}`}>
					{news.title}
				</Link>
			</Title>
			<div className={styles["news-thumb__body"]}>
				{news.content}
			</div>
		</Card>
	);
};

export { NewsThumb };