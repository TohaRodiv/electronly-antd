import { TProducts } from "#types/products/TProducts"

export type TOrder = {
	id: number
	fio: string
	tel: string
	email: string
	comment: string
	created: Date
	updated: Date
	products: TProducts
	status: {
		id: number
		name: string
		description: string
	}
}