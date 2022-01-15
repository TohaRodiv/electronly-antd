import { Container } from "#atoms/container";
import { about } from "#data/about";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { ProductList } from "#molecules/product-list";
import { Section } from "#molecules/section";
import { Space } from "#molecules/space";
import { CategoryService } from "#services/backend/api/shop/CategoryService";
import { ProductService } from "#services/backend/api/shop/ProductService";
import { CacheService } from "#services/backend/cache/CacheService";
import { TCategories } from "#types/categories/TCategories";
import { TCategory } from "#types/categories/TCategory";
import { TProducts } from "#types/products/TProducts";
import { AppstoreOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

type TProps = {
	products: TProducts | null
	categories: TCategories | null
	category: TCategory
}

type TSProps = {
	props: TProps
}


const CatalogPage: NextPage<TProps> = ({
	products,
	categories,
	category,
}) => {
	return (
		<>
			<NextSeo
				titleTemplate={`%s - купить по выгодной цене в интернет-магазине ${about.name}`}
				description={category.description || about.fullDescription}
				title={category.title} />
			{
				categories && (
					<Section theme="dark">
						<Container>
							<Section.Header>
								<Title level={3}>
									<Space>
										<AppstoreOutlined />
										Категории
									</Space>
								</Title>
							</Section.Header>
							<Section.Body>
								<CategoryList categories={categories} />
							</Section.Body>
						</Container>
					</Section>
				)
			}
			{
				products && (
					<Section>
						<Container>
							<Section.Body>
								<ProductList products={products} />
							</Section.Body>
						</Container>
					</Section>
				)
			}
		</>
	);
};

export const getServerSideProps = async ({req, res, query}: NextPageContext): Promise<TSProps> => {
	res && CacheService.setCachePage(res);
	const props: TProps = {
		categories: null,
		products: null,
		category: {
			id: 1,
			title: "Каталог",
			description: "",
			images: [],
		},
	};

	const categoryId = +(query && query.id || false);

	if (isFinite(categoryId) && categoryId > 0) {
		props.categories = (await CategoryService.getMany()).payload;
		props.products = (await ProductService.findByCategoryId(categoryId)).payload;
		props.category = (await CategoryService.findById(categoryId)).payload;
	} else {
		props.categories = (await CategoryService.getMany()).payload;
		props.products = (await ProductService.getMany()).payload;
	}

	return {
		props,
	};
};

export default CatalogPage;