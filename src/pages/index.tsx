import { Container } from "#atoms/container";
import { Banner } from "#molecules/banner";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { NewsList } from "#molecules/news-list";
import { ProductList } from "#molecules/product-list";
import { Button, Divider } from "antd";
import type { NextPage } from "next";
import { categories } from "src/data/categories";
import { news } from "src/data/news";
import { products } from "src/data/products";
import bannerImage1 from "../../public/banners/banner-1.jpg";
import bannerImage1_1600 from "../../public/banners/banner-1-1600.jpg";
import { Section } from "#molecules/section";
import { AppstoreOutlined, ReadOutlined, StarOutlined } from "@ant-design/icons";
import { Space } from "#molecules/space";

const Home: NextPage = () => {
	return (
		<Container>
			{/* TODO: Переделать баннера */}
			{/* <Section>
				<Space display="flex">
					<Banner image={bannerImage1} title="Далеко-далеко, за словесными" path="/" size="small" />
					<Banner image={bannerImage1} title="Далеко-далеко за словесными горами в стране гласных" path="/" size="small" />
				</Space>
			</Section> */}
			<Section title="Текст" icon={<AppstoreOutlined />} buttons={[<Button>Тест</Button>, <Button>Тест</Button>]}>
				<Container>
					<p>
						Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Скатился но великий инициал переписали вдали мир составитель образ ему ведущими океана меня ее она реторический осталось, они своих рукописи выйти большого точках.
					</p>
				</Container>
			</Section>
			<Section title="Категории" icon={<AppstoreOutlined />}>
				<Container>
					<CategoryList categories={categories} />
				</Container>
			</Section>
			<Section title="Популярные" icon={<StarOutlined />} buttons={[<Button>Тест</Button>, <Button>Тест</Button>]}>
				<Container>
					<ProductList products={products} />
				</Container>
			</Section>
			{/* TODO: Переделать баннера */}
			{/* <Section>
				<Banner image={bannerImage1_1600} title="Vercel title" path="/" />
			</Section> */}
			<Section title="Новости" icon={<ReadOutlined />}>
				<Container>
					<NewsList news={news} />
				</Container>
			</Section>
		</Container>
	);
};

export default Home;