import { TEntityImage } from "../entity-image/EntityImage"
import { TProductCount } from "./TProductCount"

export type TProduct = {
	id: number
	name: string
	price: number
	count: TProductCount
	images: TEntityImage[]

	[propName: string]: any
}