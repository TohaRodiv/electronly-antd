import { CreateOrderDTO } from "#services/dto/CreateOrderDTO";
import { TResultFetch } from "../types";

export interface IOrderRepository {
	findById(id: number): Promise<TResultFetch<any>>
	createAndSave(order: CreateOrderDTO): Promise<TResultFetch<any>>
}