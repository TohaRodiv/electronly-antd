import { Container } from "#atoms/container";
import { Section } from "#molecules/section";
import { TArticle } from "#types/articles/TArticle";
import { AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

type TProps = {
	news: TArticle
}

/**
 * TODO: Доработать дизайн
 * @param param0 
 * @returns 
 */
const NewsLatest: FC<TProps> = ({
	news,
}) => {
	return (
		<Section title={news.title} icon={<AppstoreOutlined />}>
			<Container>
				<img
					style={{
						float: "left",
						padding: "0 .5rem"
					}}
					src={news.images[0].path}
					alt={news.title} />
				{
					news.content
				}
				<div style={{ clear: "both" }} />
			</Container>
		</Section>
	);
};

export { NewsLatest };