import { Container } from "#atoms/container";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { ProductList } from "#molecules/product-list";
import { Section } from "#molecules/section";
import { AppstoreOutlined, StarOutlined } from "@ant-design/icons";
import { Divider, Pagination } from "antd";
import { NextPage } from "next";
import { categories } from "src/data/categories";
import { products } from "src/data/products";

const Catalog: NextPage = ({ }) => {
	return (
		<Container>
			<Section title="Категории" icon={<AppstoreOutlined />}>
				<CategoryList categories={categories} />
			</Section>
			<Divider />
			<p>
				Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заманивший семь парадигматическая о, использовало оксмокс меня правилами маленькая буквоград рот толку бросил ручеек единственное переписали жаренные подпоясал деревни скатился.
			</p>
			<Divider />
			<Section title="Товары" icon={<StarOutlined />}>
				<ProductList products={products} />
				<ProductList products={products} />
				<ProductList products={products} />
			</Section>
			<Divider />
			<Pagination defaultCurrent={1} total={50} />
		</Container>
	);
};

export default Catalog;