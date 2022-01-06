import { Container } from "#atoms/container";
import { ImagePreviewMask } from "#molecules/image-preview-mask";
import { Section } from "#molecules/section";
import { TArticle } from "#types/articles/TArticle";
import { EyeOutlined } from "@ant-design/icons";
import { Image, Space } from "antd";
import Title from "antd/lib/typography/Title";
import { FC } from "react";
import styles from "./style.module.scss";

type TProps = {
	news: TArticle
}

const NewsPage: FC<TProps> = ({
	news,
}) => {

	return (
		<Section>
			<Container>
				<Section.Body>
					<div className={styles["news-page"]}>
						<Image
							preview={{
								mask: <ImagePreviewMask />,
							}}
							src={news.images[0].path}
							alt={news.title}
							wrapperClassName={styles["news-page__image"]} />

						<Title level={3} className={styles["news-page__title"]}>
							{news.title}
						</Title>
						<div className={styles["news-page__content"]}>
							{news.content}
						</div>
						<div style={{ clear: "both" }} />
					</div>
				</Section.Body>
			</Container>
		</Section>
	);
};

export { NewsPage };