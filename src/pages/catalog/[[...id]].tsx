import { Container } from "#atoms/container";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { ProductList } from "#molecules/product-list";
import { Section } from "#molecules/section";
import { Space } from "#molecules/space";
import { CategoryService } from "#services/backend/api/shop/CategoryService";
import { ProductService } from "#services/backend/api/shop/ProductService";
import { TCategories } from "#types/categories/TCategories";
import { TProducts } from "#types/products/TProducts";
import { AppstoreOutlined, StarOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { NextPage, NextPageContext } from "next";

type TProps = {
	products: TProducts | null
	categories: TCategories | null
}

type TSProps = {
	props: TProps
}


const CatalogPage: NextPage<TProps> = ({
	products,
	categories,
}) => {
	return (
		<>
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

export const getServerSideProps = async (ctx: NextPageContext): Promise<TSProps> => {
	const props: TProps = {
		categories: null,
		products: null,
	};

	const categoryId = +(ctx.query && ctx.query.id || false);

	if (isFinite(categoryId) && categoryId > 0) {
		props.categories = (await CategoryService.getMany()).payload;
		props.products = (await ProductService.findByCategoryId(categoryId)).payload;
	} else {
		props.categories = (await CategoryService.getMany()).payload;
		props.products = (await ProductService.getMany()).payload;
	}

	return {
		props,
	};
};

export default CatalogPage;