import { about } from "#data/about";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { AboutPage } from "src/components/pages/about-page";

const AboutPageNext: NextPage = () => {
	return (
		<>
			<NextSeo
				description={about.fullDescription}
				title="О нас" />
			<AboutPage />
		</>
	);
};

export default AboutPageNext;