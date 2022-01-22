import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "#atoms/link";
import { TArticle } from "src/types/articles/TArticle";
import { AlignLeftOutlined } from "@ant-design/icons";
import { Image } from "#atoms/image";
import LogoImage from "#public/images/logo.svg";

type TProps = {
	news: TArticle
	key?: React.Key
}

const NewsThumb: FC<TProps> = ({
	news,
	...props
}) => {

	const previewImage = news.images.length > 0 ? news.images[0].path : LogoImage;

	const imageBlock = (
		<Link href={`/news/${news.id}`} className={styles["news-thumb__image-link"]}>
			<Image
				width={360}
				height={200}
				objectFit="cover"
				src={previewImage}
				alt={news.title}
				className={styles["news-thumb__image"]} />
		</Link>
	);

	return (
		<Card
			bodyStyle={{ flex: "1 1 auto" }}
			className={styles["news-thumb"]}
			actions={[<Link href={`/news/${news.id}`} key="news-thumb-image"><AlignLeftOutlined /> Подробнее</Link>]}
			cover={imageBlock}
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