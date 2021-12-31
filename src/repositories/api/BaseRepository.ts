import { AuthService } from "#services/backend/api/auth/AuthService";
import { RequestQueryBuilder } from "@nestjsx/crud-request";
import { TResponse, TResultFetch, } from "../types";

export abstract class BaseRepository {

	constructor() {
		RequestQueryBuilder.setOptions({
			delim: "||",
			delimStr: ",",
			paramNamesMap: {
				fields: ["fields", "select"],
				search: "s",
				filter: ["filter[]", "filter"],
				or: ["or[]", "or"],
				join: ["join[]", "join"],
				sort: ["sort[]", "sort"],
				limit: ["per_page", "limit"],
				offset: ["offset"],
				page: ["page"],
				cache: ["cache"]
			}
		});
	}

	protected async fetch(url: RequestInfo, options?: RequestInit): Promise<TResultFetch<any | any[]> & TResponse> {
		const result: TResultFetch<any | any[]> & TResponse = {
			response: null,
			payload: null,
			error: null,
		};

		try {
			const { headers, ...optionFields } = options || {};
			
			const response = await fetch(`${process.env.API_URL}${url}`, {
				...optionFields,
				headers: new Headers({
					...headers,
					"Authorization": `Bearer ${await AuthService.getAccessToken()}`
				}),
			});

			result.response = response;

			const resultJSON = await response.json();

			if (!response.ok) {

				if (response.status == 401) {
					await AuthService.authorize();
					await this.fetch(url, options);
				}

				result.error = resultJSON;
			} else {
				result.payload = resultJSON;
			}

		} catch (error) {
			console.error(error);
			if (error instanceof Error) {
				result.error = {
					statusCode: 500,
					error: error.name,
					message: error.message,
				};
			} else {
				throw new Error(`Unknown type of error: ${error}`);
			}
		}
		
		return result;
	}

	protected getQueryBuilder(): RequestQueryBuilder {
		return RequestQueryBuilder.create();
	}
}