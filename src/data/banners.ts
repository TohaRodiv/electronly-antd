import { TBanner } from "#types/banner/TBanner";
import { about } from "./about";

export const banners: TBanner[] = [
	{
		id: 1,
		title: `${about.name} - ${about.shortDescription}`,
		subtitle: about.fullDescription,
		image: "/banners/hero-1.jpg",
		images: [
			{
				id: 1,
				path: "",
			},
		],
	},
	{
		id: 2,
		title: `${about.name} - ${about.shortDescription}`,
		subtitle: about.fullDescription,
		image: "/banners/hero-2.webp",
		images: [
			{
				id: 1,
				path: "",
			},
		],
	},
];