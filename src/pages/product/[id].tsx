import { ProductService } from "#services/backend/api/shop/ProductService";
import { TProduct } from "#types/products/TProduct";
import { NextPage, NextPageContext } from "next";
import { ProductPage } from "src/components/pages/product-page";

type TProps = {
	product: TProduct | null
}

type TSProps = {
	props: TProps
}

const NextProductPage: NextPage <TProps> = ({
	product,
}) => {
	return (
		product && (
			<ProductPage product={product} />
		)
	);
};

export const getServerSideProps = async (ctx: NextPageContext): Promise<TSProps> => {
	const props: TProps= {
		product: null,
	};

	const productId = +(ctx.query && ctx.query.id || false);

	if (isFinite(productId) && productId > 0) {
		props.product = (await ProductService.findById(productId)).payload;
	}

	return {
		props,
	};
};

export default NextProductPage;