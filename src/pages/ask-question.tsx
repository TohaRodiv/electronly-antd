import { CTA } from "#organisms/CTA";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const AskQuestion: NextPage = () => {
	return (
		<>
			<NextSeo
				title="Есть вопросы? Напишите нам – будем рады ответить." />
			<CTA head="Есть вопросы? Напишите нам – будем рады ответить." />
		</>
	);
};

export default AskQuestion;