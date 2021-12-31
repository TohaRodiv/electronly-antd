import { IStorageRepository } from "#repositories/interfaces/IStorageRepository";
import { PromoRepository } from "#repositories/api/promo/PromoRepository";
import { TResultFetch } from "#repositories/types";

export const BannerService = new class {
	protected repsitory: IStorageRepository;

	constructor() {
		this.repsitory = new PromoRepository();	
	}
	public async getMany(options: any = {}): Promise<TResultFetch<any[]>> {
		return await this.repsitory.findMany(options);
	}

	public async findById(id: number): Promise<TResultFetch<any>> {
		return await this.repsitory.findById(id);
	}
};