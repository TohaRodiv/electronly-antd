import { TResultFetch } from "#repositories/types";
import { CreateOrderDTO } from "#services/dto/CreateOrderDTO";
import { BaseAPIService } from "./BaseAPIService";

export const OrderService = new class extends BaseAPIService {
	public async createAndSave(dto: CreateOrderDTO): Promise<TResultFetch<any>> {
		return await this.fetch("/shop/orders", {
			method: "POST",
			body: JSON.stringify(dto),
			headers: new Headers({ "Content-Type": "application/json" }),
		});
	}
};