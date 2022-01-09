import { Container } from "#atoms/container";
import { about } from "#data/about";
import { Error } from "#molecules/error/Error";
import { Section } from "#molecules/section";
import { NextPage, NextPageContext } from "next";
import { NextSeo } from "next-seo";

type TProps = {
	statusCode: number | undefined
}

const getRuHTTPErrorDescription = (statusCode: number | undefined) => {
	switch (statusCode) {
		case 404: return "Страница не найдена!";
		case 500: "Ошибка на сервере, зайдите позже.";
		default: return "На сайте возникла ошибка!";
	}
}

const ErrorPage: NextPage<TProps> = ({
	statusCode,
}) => {
	return (
		<>
			<NextSeo
				noindex={true}
				description={about.fullDescription}
				title={getRuHTTPErrorDescription(statusCode)} />
			<Section>
				<Container>
					<Section.Body>
						<Error statusCode={statusCode} title={getRuHTTPErrorDescription(statusCode)} />
					</Section.Body>
				</Container>
			</Section>
		</>
	);
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): TProps => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}


export default ErrorPage;