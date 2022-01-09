import { Container } from "#atoms/container";
import { about } from "#data/about";
import { ProductSearchForm } from "#molecules/product-search-form";
import { Section } from "#molecules/section";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const SearchIndexPage: NextPage = () => {
	return (
		<>
			<NextSeo
				description={about.fullDescription}
				title="Поиск по каталогу"/>
			<Section>
				<Container>
					<Section.Header>
						<Title level={3}>Поиск в каталоге</Title>
					</Section.Header>
					<Section.Body>
						<ProductSearchForm
							enterButton={<Button icon={<SearchOutlined />} type="primary" ghost>Поиск</Button>} />
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export default SearchIndexPage;