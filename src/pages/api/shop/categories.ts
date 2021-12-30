import type { NextApiRequest, NextApiResponse } from "next";
import { RequestHandler } from "#services/backend/RequestHandler/RequestHandler";


const handlerCategories = (req: NextApiRequest, res: NextApiResponse) => {
	const requestHandler = new RequestHandler(req);


	requestHandler.get(() => {
		res
			.status(200)
			.json({ name: 'John Doe' });
	});

	requestHandler.post(() => {
		res
			.status(200)
			.json({ name: 'John Doe' });
	});

	requestHandler.customMethod("PUT", () => {
		res
			.status(200)
			.json({ name: 'John Doe' });
	});
};

export default handlerCategories;