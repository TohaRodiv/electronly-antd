import { TImage } from "./TImage"

export type TProduct = {
	id: number
	name: string
	price: number
	count: number | null
	images: TImage[]

	[propName: string]: any
}