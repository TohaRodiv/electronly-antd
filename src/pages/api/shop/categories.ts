import type { NextApiRequest, NextApiResponse } from "next";
import { RequestHandler } from "#services/backend/RequestHandler";


const handlerCategories = (req: NextApiRequest, res: NextApiResponse) => {
	const requestHandler = new RequestHandler(req, res);

	requestHandler.GET((_params) => {
		res
			.status(200)
			.json({ name: 'John Doe' });
	});

	requestHandler.POST((_body) => {
		res
			.status(200)
			.json({ ..._body });
	});

	requestHandler.DELETE((_query) => {
		res
			.status(200)
			.json({ name: 'John Doe' });
	});
};

export default handlerCategories;