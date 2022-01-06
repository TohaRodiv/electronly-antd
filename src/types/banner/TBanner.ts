import { TEntityImage } from "#types/entity-image/EntityImage";

export type TBanner = {
	id: number;
	title: string;
	subtitle?: string;
	images: TEntityImage[];

	[propName: string]: any;
};