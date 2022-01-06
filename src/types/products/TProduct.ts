import { TCategory } from "#types/categories/TCategory"
import { TEntityImage } from "../entity-image/EntityImage"
import { TProductCount } from "./TProductCount"

export type TProduct = {
	id: number
	name: string
	price: number
	crossed_price: number
	count: TProductCount
	images: TEntityImage[]
	available: boolean
	category: TCategory

	[propName: string]: any
}