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

type TProps = {
	news: TArticles | null
	products: TProducts | null
	categories: TCategories | null
}

type TSProps = {
	props: TProps
}

const Home: NextPage<TProps> = ({
	news,
	products,
	categories,
}) => {
	return (
		<Container>
			{/* TODO: Переделать баннера */}
			{/* <Section>
				<Space display="flex">
					<Banner image={bannerImage1} title="Далеко-далеко, за словесными" path="/" size="small" />
					<Banner image={bannerImage1} title="Далеко-далеко за словесными горами в стране гласных" path="/" size="small" />
				</Space>
			</Section> */}
			{
				categories && categories.length && (
					<Section title="Категории" icon={<AppstoreOutlined />}>
						<Container>
							<CategoryList categories={categories} />
						</Container>
					</Section>
				)
			}
			{
				products && products.length && (
					<Section
						title="Популярные"
						icon={<StarOutlined />}
						buttons={[<Button key="btn-1">Тест</Button>, <Button key="btn-2">Тест</Button>]}>
						<Container>
							<ProductList products={products} />
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
					<Section title="Новости" icon={<ReadOutlined />}>
						<Container>
							<NewsList news={news} />
						</Container>
					</Section>
				)
			}
		</Container>
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
	props.categories = (await (await CategoryService.getMany()).payload);
	// props.banners = (await BannerService.getMany()).payload;

	return {
		props,
	};
};

export default Home;