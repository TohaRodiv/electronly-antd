import { IOrderRepository } from "../../interfaces/IOrderRepository";
import { BaseRepository } from "../BaseRepository";
import { TResultFetch } from "../../types";
import { CreateOrderDTO } from "#services/dto/CreateOrderDTO";

export class OrderRepository extends BaseRepository implements IOrderRepository {
	async findById(id: number): Promise<TResultFetch<any>> {
		return await this.fetch(`/shop/orders/${id}`);
	}
	
	async createAndSave(dto: CreateOrderDTO): Promise<TResultFetch<any>> {
		return await this.fetch("/shop/orders", {
			method: "POST",
			body: JSON.stringify(dto),
			headers: { "Content-Type": "application/json" },
		});
	}
}