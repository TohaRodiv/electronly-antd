import { QueryFilter, QueryFilterArr, SCondition } from "@nestjsx/crud-request"

export type TFindManyOptions = {
	limit: number
	filter?: QueryFilter | QueryFilter[] | Array<QueryFilter | QueryFilterArr>
	search?: SCondition
}

export type TResponse = {
	response: Response | null
}

export type TResultFetch <TPayload> = {
	payload: TPayload | null
	error: {
		statusCode: number
		message: string | string[]
		error: string
	} | null
}