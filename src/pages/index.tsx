import { Container } from "#atoms/container";
import { Banner } from "#molecules/banner";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { NewsList } from "#molecules/news-list";
import { ProductList } from "#molecules/product-list";
import { Divider, Space } from "antd";
import type { NextPage } from "next";
import { categories } from "src/data/categories";
import { news } from "src/data/news";
import { products } from "src/data/products";
import bannerImage1 from "../../public/banners/banner-1.jpg";
import bannerImage1_1600 from "../../public/banners/banner-1-1600.jpg";
import { Section } from "#molecules/section";
import { AppstoreOutlined, ReadOutlined, StarOutlined } from "@ant-design/icons";

const Home: NextPage = () => {
	return (
		<Container>
			<Space>
				<Banner image={bannerImage1} title="Vercel title" path="/" />
				<Banner image={bannerImage1} title="Vercel title" path="/" />
			</Space>
			<Divider />
			<Section title="Категории" icon={<AppstoreOutlined />}>
				<CategoryList categories={categories} />
			</Section>
			<Divider />
			<Section title="Популярные" icon={<StarOutlined />}>
				<ProductList products={products} />
			</Section>
			<Divider />
			<Banner image={bannerImage1_1600} title="Vercel title" path="/" />
			<Divider />
			<Section title="Новости" icon={<ReadOutlined />}>
				<NewsList news={news} />
			</Section>
		</Container>
	);
};

export default Home;