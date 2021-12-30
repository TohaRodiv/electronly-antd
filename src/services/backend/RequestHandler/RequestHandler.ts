import { NextApiRequest } from "next";

export class RequestHandler {
	constructor(
		protected readonly req: NextApiRequest,
	) { }

	public get(callback: () => void) {
		if (this.req.method === "GET") {
			callback();
		}
	}

	public post(callback: () => void) {
		if (this.req.method === "POST") {
			callback();
		}
	}

	public update(callback: () => void) {
		if (this.req.method === "UDPATE") {
			callback();
		}
	}

	public delete(callback: () => void) {
		if (this.req.method === "DELETE") {
			callback();
		}
	}

	public customMethod(methodName: string, callback: () => void) {
		if (this.req.method === methodName) {
			callback();
		}
	}
}