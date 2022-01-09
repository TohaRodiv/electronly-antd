import { Container } from "#atoms/container";
import { about } from "#data/about";
import { Empty } from "#molecules/empty";
import { ProductList } from "#molecules/product-list";
import { ProductSearchForm } from "#molecules/product-search-form";
import { Section } from "#molecules/section";
import { ProductService } from "#services/backend/api/shop/ProductService";
import { TProducts } from "#types/products/TProducts";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

type TProps = {
	products: TProducts | null
	phrase: string
}

type TSProps = {
	props: TProps
}

const SearchPage: NextPage<TProps> = ({
	products,
	phrase,
}) => {
	return (
		<>
			<NextSeo
				noindex={true}
				description={about.fullDescription}
				title={phrase || "Поиск по каталогу"}/>
			<Section>
				<Container>
					<Section.Header>
						<ProductSearchForm
							enterButton={<Button icon={<SearchOutlined />} type="primary" ghost>Поиск</Button>}
							defaultValue={phrase} />
					</Section.Header>
					<Section.Body>
						{
							products && products.length ?
								<ProductList products={products} /> :
								<Empty description={`Товаро не найдено по запросу "${phrase}"`} />
						}
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export const getServerSideProps = async (ctx: NextPageContext): Promise<TSProps> => {
	const props: TProps = {
		products: null,
		phrase: "",
	};

	const phrase = ctx.query && ctx.query.phrase as string || "";

	props.phrase = phrase;

	if (phrase) {
		props.products = (await ProductService.getMany({
			search:
			{
				"name":
				{
					"$or": {
						"$contL": phrase,
					},
				},
			}
			,
			limit: 100,
		})).payload;
	}

	return {
		props,
	};
};

export default SearchPage;