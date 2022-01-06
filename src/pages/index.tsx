import { Container } from "#atoms/container";
import { Banner } from "#molecules/banner";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { NewsList } from "#molecules/news-list";
import { ProductList } from "#molecules/product-list";
import { Button, Divider } from "antd";
import type { NextPage } from "next";
import bannerImage1 from "../../public/banners/banner-1.jpg";
import bannerImage1_1600 from "../../public/banners/banner-1-1600.jpg";
import { Section } from "#molecules/section";
import { AppstoreOutlined, ReadOutlined, StarOutlined } from "@ant-design/icons";
import { Space } from "#molecules/space";
import { NewsService } from "#services/backend/api/blog/NewsService";
import { ProductService } from "#services/backend/api/shop/ProductService";
import { TProducts } from "#types/products/TProducts";
import { TArticles } from "#types/articles/TArticles";
import { TCategories } from "#types/categories/TCategories";
import { CategoryService } from "#services/backend/api/shop/CategoryService";
import { NewsLatest } from "#molecules/news-latest";
import Title from "antd/lib/typography/Title";
import { MainCarousel } from "#molecules/main-carousel";
import { TBanner } from "#types/banner/TBanner";
import { BannerService } from "#services/backend/api/promo/BannerService";
import { banners } from "#data/banners";

type TProps = {
	news: TArticles | null
	products: TProducts | null
	categories: TCategories | null
}

type TSProps = {
	props: TProps
}

const HomePage: NextPage<TProps> = ({
	news,
	products,
	categories,
}) => {
	return (
		<>
			{
				banners && (
					<>
						<MainCarousel banners={banners} scrollTo="section-categories" />
					</>
				)
			}
			{/* TODO: Переделать баннера */}
			{/* <Section theme="dark">
				<Space display="flex">
					<Banner image={bannerImage1} title="Далеко-далеко, за словесными" path="/" size="small" />
					<Banner image={bannerImage1} title="Далеко-далеко за словесными горами в стране гласных" path="/" size="small" />
				</Space>
			</Section> */}
			{
				categories && categories.length && (
					<Section theme="dark" id="section-categories">
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
			{/* TODO: Переделать баннера */}
			{/* <Section>
				<Banner image={bannerImage1_1600} title="Vercel title" path="/" />
			</Section> */}
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

export const getServerSideProps = async (): Promise<TSProps> => {
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
	};
};

export default HomePage;