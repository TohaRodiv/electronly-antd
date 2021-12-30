import { Container } from "#atoms/container";
import { CategoryList } from "#molecules/category-list/CategoryList";
import { ProductList } from "#molecules/product-list";
import { Section } from "#molecules/section";
import { Space } from "#molecules/space";
import { AppstoreOutlined, StarOutlined } from "@ant-design/icons";
import { Divider, Pagination } from "antd";
import { NextPage } from "next";
import { categories } from "src/data/categories";
import { products } from "src/data/products";

const Catalog: NextPage = ({ }) => {
	return (
		<Container>
			<Section title="Категории" icon={<AppstoreOutlined />}>
				<Container>
					<CategoryList categories={categories} />
				</Container>
			</Section>
			<Divider />
			<Container>
				<p>
					Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заманивший семь парадигматическая о, использовало оксмокс меня правилами маленькая буквоград рот толку бросил ручеек единственное переписали жаренные подпоясал деревни скатился.
				</p>
			</Container>
			<Divider />
			<Section title="Товары" icon={<StarOutlined />}>
				<Container>
					<ProductList products={products} />
					<ProductList products={products} />
					<ProductList products={products} />
				</Container>
			</Section>
			<Divider />
			<Space display="flex" justifyContent="center">
				<Pagination defaultCurrent={1} total={50} />
			</Space>
		</Container>
	);
};

export default Catalog;