import { DefaultSeoProps } from "next-seo";
import { about } from "./about";

export const seo: DefaultSeoProps = {
	titleTemplate: `%s | ${about.name} - ${about.shortDescription}`,
	defaultTitle: `${about.name} - ${about.shortDescription}`
};