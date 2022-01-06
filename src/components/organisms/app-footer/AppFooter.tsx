import { Container } from "#atoms/container";
import { BasicProps, Footer } from "antd/lib/layout/layout";
import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { MainMenu } from "#molecules/main-menu";
import { CatalogMenu } from "#molecules/catalog-menu";
import { ThunderboltOutlined } from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import { ContactMenu } from "#molecules/contact-menu";

type TProps = BasicProps & {}

const AppFooter: FC<TProps> = ({
	className,
	...props
}) => {
	const classes = classNames(styles["app-footer"], className);

	return (
		<Footer className={classes} {...props}>
			<Container>
				<Row gutter={24}>
					<Col sm={6}>
						<Title level={5} className={styles["app-footer__head"]}>Electronly - интернет-магазин электроники</Title>
						<Paragraph className={styles["app-footer__description"]}>
							Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заглавных они рот раз рекламных агентство ведущими снова, это речью власти, точках страну приставка, проектах запятых города своих родного оксмокс гор. Продолжил?
						</Paragraph>
					</Col>
					<Col>
						<Title level={5} className={styles["app-footer__head"]}>Меню</Title>
						<MainMenu mode="inline" inlineIndent={0} className="app-footer__menu" icon={<ThunderboltOutlined />} />
					</Col>
					<Col>
						<Title level={5} className={styles["app-footer__head"]}>Каталог</Title>
						<CatalogMenu theme="dark" inlineIndent={0} className="app-footer__menu" icon={<ThunderboltOutlined />} />
					</Col>
					<Col>
						<Title level={5} className={styles["app-footer__head"]}>Контакты</Title>
						<ContactMenu theme="dark" inlineIndent={0} className="app-footer__menu" />
					</Col>
				</Row>
			</Container>
			<div className={styles["app-footer__copyright-wrapper"]}>
				<Container>
					{(new Date).getFullYear()} &copy; Electronly
				</Container>
			</div>
		</Footer>
	);
};

export { AppFooter };