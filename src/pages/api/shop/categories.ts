import type { NextApiRequest, NextApiResponse } from "next";
import { RequestHandler } from "#services/backend/RequestHandler";
import { CategoryService } from "#services/backend/api/shop/CategoryService";


const handlerCategories = (req: NextApiRequest, res: NextApiResponse) => {
	const requestHandler = new RequestHandler(req, res);

	requestHandler.GET(async () => {
		const { payload, error, } = await CategoryService.getMany();

		if (error) {
			res.status(error.statusCode).json(error);
		} else {
			res.status(200).json(payload);
		}
	});
};

export default handlerCategories;