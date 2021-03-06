import { TEntityImage } from "../entity-image/EntityImage"

export type TCategory = {
	id: number
	title: string
	description?: string
	images: TEntityImage[]
}