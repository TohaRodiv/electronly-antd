import { RequestQueryBuilder } from "@nestjsx/crud-request";

export abstract class ApiService {

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

	protected async fetch(url: RequestInfo, options?: RequestInit): Promise<Response | null> {
		try {
			const response = await fetch(`${process.env.API_URL}${url}`, options);

			if (response.status === 404) {
				console.error(response.status, response.statusText);
				return null;
			}

			const result = await response.json();

			return result;
		} catch (err) {
			if (err instanceof Error) {
				console.error("Catch error:", err.message);
				return null;
			} else {
				throw new Error(`Unknown type of error ${err}`);
			}
		}
	}

	protected getQueryBuilder(): RequestQueryBuilder {
		return RequestQueryBuilder.create();
	}
}