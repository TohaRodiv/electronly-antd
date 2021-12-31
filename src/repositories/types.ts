export type TFindManyOptions = {
	limit: number
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