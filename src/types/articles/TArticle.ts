import { TEntityImage } from "../entity-image/EntityImage"

export type TArticle = {
	id: number
	title: string
	images: TEntityImage[]
	content: string
}