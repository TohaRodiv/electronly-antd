import { Container } from "#atoms/container";
import { BasicProps, Footer } from "antd/lib/layout/layout";
import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Col, Menu, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { MainMenu, MainMenuList } from "#molecules/main-menu";
import { CatalogMenu } from "#molecules/catalog-menu";
import { ThunderboltOutlined } from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import { ContactMenu } from "#molecules/contact-menu";
import { about } from "#data/about";
import { UsefullMenu } from "#molecules/usefull-menu";

type TProps = BasicProps & {}

const AppFooter: FC<TProps> = ({
	className,
	...props
}) => {
	const classes = classNames(styles["app-footer"], className);

	return (
		<Footer className={classes} {...props}>
			<Container>
				<Row gutter={[24, 8]} justify="space-between">
					<Col  xs={24} lg={6}>
						<Title level={5} className={styles["app-footer__head"]}>{about.name} - {about.shortDescription}</Title>
						<Paragraph className={styles["app-footer__description"]}>
							{about.fullDescription}
						</Paragraph>
					</Col>
					<Col>
						<Title level={5} className={styles["app-footer__head"]}>Меню</Title>
						<MainMenuList theme="dark" icon={<ThunderboltOutlined />} />
					</Col>
					<Col>
						<Title level={5} className={styles["app-footer__head"]}>Каталог</Title>
						<CatalogMenu theme="dark" icon={<ThunderboltOutlined />} />
					</Col>
					<Col>
						<Title level={5} className={styles["app-footer__head"]}>Полезное</Title>
						<UsefullMenu theme="dark" icon={<ThunderboltOutlined />} />
					</Col>
					<Col>
						<Title level={5} className={styles["app-footer__head"]}>Контакты</Title>
						<ContactMenu theme="dark" />
					</Col>
				</Row>
			</Container>
			<div className={styles["app-footer__copyright-wrapper"]}>
				<Container>
					{(new Date).getFullYear()} &copy; {about.name} - {about.shortDescription}
				</Container>
			</div>
		</Footer>
	);
};

export { AppFooter };