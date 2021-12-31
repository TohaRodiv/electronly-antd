import type { NextApiRequest, NextApiResponse } from "next";

type TNextQuery = { [key: string]: string | string[] }

export class RequestHandler {
	private query: TNextQuery = {};
	private body: any = null;

	constructor(
		private readonly req: NextApiRequest,
		private readonly res: NextApiResponse,
	) {
		this.query = req.query;
		this.body = req.body;
	}

	public GET(callback: (query: TNextQuery) => void) {
		if (this.req.method === "GET") {
			this.requestHandle(() => {
				callback(this.query);
			});
		}
	}

	public POST(callback: (body: any) => void) {
		if (this.req.method === "POST") {
			this.requestHandle(() => {
				callback(this.body);
			});
		}
	}

	public PATCH(callback: (query: TNextQuery, body: any) => void) {
		if (this.req.method === "PATCH") {
			this.requestHandle(() => {
				callback(this.query, this.body);
			});
		}
	}

	public DELETE(callback: (query: TNextQuery) => void) {
		if (this.req.method === "DELETE") {
			this.requestHandle(() => {
				callback(this.query);
			});
		}
	}

	public customMethod(methodName: string, callback: () => void) {
		if (this.req.method === methodName) {
			this.requestHandle(callback);
		}
	}

	private requestHandle(callback: () => void) {
		try {
			callback();
		} catch (error) {
			if (error instanceof Error) {
				this.res.status(500).send({ error: error.message });
			} else {
				console.error("Unknown type error:", typeof error, error);
				this.res.status(500).send({ error: "Unknown type error!" });
			}
		}
	}
}