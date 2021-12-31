import { OrderService } from "#services/backend/api/shop/OrderService";
import { RequestHandler } from "#services/backend/RequestHandler";
import { NextApiRequest, NextApiResponse } from "next";

const handleOrders = (req: NextApiRequest, res: NextApiResponse) => {
	const requestHandler = new RequestHandler(req, res);

	requestHandler.POST(async (data) => {
		const { payload, error } = await OrderService.createAndSave(data);
		
		if (error) {
			res.status(error.statusCode || 500).json(error);
		} else {
			res.status(201).json(payload);
		}
	});
};

export default handleOrders;