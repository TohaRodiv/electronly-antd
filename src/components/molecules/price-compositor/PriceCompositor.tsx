import { FC } from "react";
import { Price } from "#atoms/price";
import { Space } from "antd";

type TProps = {
	primary: number
	crossed?: number
	discount?: number
}

const PriceCompositor: FC<TProps> = ({
	primary,
	crossed,
	discount,
}) => {

	let primaryPrice = primary;
	let crossedPrice = crossed;
	let discountPercentage = discount;

	if (primaryPrice) {
		if (crossedPrice) {

			discountPercentage = 100 - Math.round((primaryPrice * 100) / crossedPrice) || -1;

		} else if (typeof discountPercentage === "number") {

			let reductionAmount = Math.floor((primaryPrice * discountPercentage) / 100);
			crossedPrice = primaryPrice;
			primaryPrice = primaryPrice - reductionAmount;

		}
	}


	const isShowPrimaryPrice = primaryPrice > 0 && typeof crossedPrice === "undefined" ?
		!!primaryPrice :
		(!!crossedPrice && primaryPrice < Number(crossedPrice));

	return (
		<Space wrap>
			{
				isShowPrimaryPrice ?
					(
						<Price type="primary" size="middle" value={primaryPrice} />
					) :
					(
						<Price type="order" size="small" value={primaryPrice} />
					)
			}
			{
				!!crossedPrice && primaryPrice < crossedPrice && <Price type="crossed" size="small" value={crossedPrice} />
			}
			{
				!!discountPercentage && primaryPrice < Number(crossedPrice) && <Price type="discount" size="small" value={-Math.abs(discountPercentage)} />
			}
		</Space>
	);
};

export { PriceCompositor };