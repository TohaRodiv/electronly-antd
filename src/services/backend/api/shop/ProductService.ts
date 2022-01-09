import { IProductRepository } from "#repositories/interfaces/IProductRepository";
import { ProductRepository } from "#repositories/api/shop/ProductRepository";
import { TFindManyOptions, TResultFetch } from "#repositories/types";

export const ProductService = new class {
	protected repository: IProductRepository;

	constructor() {
		this.repository = new ProductRepository();
	}

	public async getMany(options: TFindManyOptions = { limit: 10,}): Promise<TResultFetch<any[]>> {
		return await this.repository.findMany(options);
	}

	public async findById(id: number): Promise<TResultFetch<any>> {
		return await this.repository.findById(id);
	}

	public async findByCategoryId(categoryId: number): Promise<TResultFetch<any[]>> {
		return await this.repository.findByCategoryId(categoryId);
	}
};