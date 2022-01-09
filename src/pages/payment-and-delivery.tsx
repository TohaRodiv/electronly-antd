import { Container } from "#atoms/container";
import { about } from "#data/about";
import { Section } from "#molecules/section";
import { DollarOutlined } from "@ant-design/icons";
import { List } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const PaymentAndDeliveryPage: NextPage = () => {
	return (
		<>
			<NextSeo
				description={about.fullDescription}
				title={"Оплата и доставка"} />
			<Section>
				<Container>
					<Section.Header>
						<Title level={3}>
							Оплата и доставка
						</Title>
					</Section.Header>
					<Section.Body>
						<Title level={4}>Условия оплаты</Title>
						<Paragraph>
							При получении товара обязательно проверьте комплектацию товара.
							<List
								size="small"
								header="В нашем интернет-магазине Вы можете оплатить заказ следующими способами:">
								<List.Item>Оплата наличными курьеру при получении (для г.Хабаровска).</List.Item>
							</List>
						</Paragraph>
						<Title level={4}>Доставка</Title>
						<Paragraph>
							Стоимость и сроки доставки будут уточнены после согласования с менеджером.
						</Paragraph>
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export default PaymentAndDeliveryPage;