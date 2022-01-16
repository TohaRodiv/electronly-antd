import { SWR_SHOP_CATEGORIES } from "#constants/SWR";
import { TResultFetch } from "#repositories/types";
import { ShopCategoryService } from "#services/frontend/api/ShopCategoryService";
import { TCategories } from "#types/categories/TCategories";
import useSWRImmutable from "swr/immutable";

export const useShopCategories = () => {
	const swr = useSWRImmutable<TResultFetch<TCategories>>(
		SWR_SHOP_CATEGORIES,
		() => ShopCategoryService.getMany()
	);

	return {
		categories: swr.data?.payload,
		...swr
	};
};