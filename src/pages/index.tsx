import { Container } from "#atoms/container";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { NewsList } from "#molecules/news-list";
import { ProductList } from "#molecules/product-list";
import type { GetStaticProps, NextPage } from "next";
import { Section } from "#molecules/section";
import { AppstoreOutlined, ReadOutlined, SearchOutlined, StarOutlined } from "@ant-design/icons";
import { Space } from "#molecules/space";
import { NewsService } from "#services/backend/api/blog/NewsService";
import { ProductService } from "#services/backend/api/shop/ProductService";
import { TProducts } from "#types/products/TProducts";
import { TArticles } from "#types/articles/TArticles";
import { TCategories } from "#types/categories/TCategories";
import { CategoryService } from "#services/backend/api/shop/CategoryService";
import Title from "antd/lib/typography/Title";
import { TrackingOrderForm } from "#molecules/tracking-order-form";
import Paragraph from "antd/lib/typography/Paragraph";
import { NextSeo } from "next-seo";
import { about } from "#data/about";
import { Hero } from "#molecules/hero/Hero";

type TProps = {
	news: TArticles | null
	products: TProducts | null
	categories: TCategories | null
}

const HomePage: NextPage<TProps> = ({
	news,
	products,
	categories,
}) => {
	return (
		<>
			<NextSeo
				description={about.fullDescription} />
			<Hero scrollTo="tracking-order" />
			{
				categories && categories.length && (
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
				products && products.length && (
					<Section theme="light">
						<Container>
							<Section.Header>
								<Title level={3}>
									<Space>
										<StarOutlined />
										Новинки
									</Space>
								</Title>
							</Section.Header>
							<Section.Body>
								<ProductList products={products} />
							</Section.Body>
						</Container>
					</Section>
				)
			}
			<Section theme="dark" id="tracking-order">
				<Container>
					<Section.Header>
						<Title level={3}>
							<Space>
								<SearchOutlined />
								Поиск заказа
							</Space>
						</Title>
					</Section.Header>
					<Section.Body>
						<Paragraph style={{ color: "var(--ant-primary-1)", }}>
							Заказывали ранее у нас? Введите номер заказа, чтобы проверить его статус.
						</Paragraph>
						<TrackingOrderForm size="large" theme="light" />
					</Section.Body>
				</Container>
			</Section>
			{
				news && news.length && (
					<Section theme="light">
						<Container>
							<Section.Header>
								<Title level={3}>
									<Space>
										<ReadOutlined />
										Новости
									</Space>
								</Title>
							</Section.Header>
							<Section.Body>
								<NewsList news={news} />
							</Section.Body>
						</Container>
					</Section>
				)
			}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {

	const props: TProps = {
		news: null,
		products: null,
		categories: null,
	};

	props.news = (await NewsService.getMany()).payload;
	props.products = (await ProductService.getMany()).payload;
	props.categories = (await CategoryService.getMany()).payload;

	return {
		props,
		revalidate: 60 * 60,
	};
};

export default HomePage;