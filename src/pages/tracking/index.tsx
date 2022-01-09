import { Container } from "#atoms/container";
import { about } from "#data/about";
import { Section } from "#molecules/section";
import { TrackingOrderForm } from "#molecules/tracking-order-form";
import Title from "antd/lib/typography/Title";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexTrackingPage: NextPage = () => {

	return (
		<>
			<NextSeo
				description={about.fullDescription}
				title="Поиск заказа"/>
			<Section>
				<Container>
					<Section.Header>
						<Title level={3}>Поиск заказа</Title>
					</Section.Header>
					<Section.Body>
						<TrackingOrderForm theme="dark" />
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

export default IndexTrackingPage;