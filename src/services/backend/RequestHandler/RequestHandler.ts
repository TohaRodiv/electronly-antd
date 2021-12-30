import { NextApiRequest } from "next";

type TNextQuery = { [key: string]: string | string[] }

export class RequestHandler {
	private query: TNextQuery = {};
	private body: any = null;

	constructor(
		private readonly req: NextApiRequest,
	) {
		this.query = req.query;
		this.body = req.body;
	}

	public GET(callback: (query: TNextQuery) => void) {
		if (this.req.method === "GET") {
			callback(this.query);
		}
	}

	public POST(callback: (body: any) => void) {
		if (this.req.method === "POST") {
			callback(this.body);
		}
	}

	public PATCH(callback: (query: TNextQuery, body: any) => void) {
		if (this.req.method === "PATCH") {
			callback(this.query, this.body);
		}
	}

	public DELETE(callback: (query: TNextQuery) => void) {
		if (this.req.method === "DELETE") {
			callback(this.query);
		}
	}

	public customMethod(methodName: string, callback: () => void) {
		if (this.req.method === methodName) {
			callback();
		}
	}
}