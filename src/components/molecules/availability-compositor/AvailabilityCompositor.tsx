import { FC } from "react";
import { TProductCount } from "src/types/products/TProductCount";
import { Availability } from "#atoms/availability";
import { TAvailabilityType } from "src/types/products/TAvailabilityType";


type TProps = React.HTMLAttributes<HTMLDivElement> & {
	count: TProductCount
	available: boolean
}

const AvailabilityCompositor: FC<TProps> = ({
	count,
	available,
}) => {
	let availableType: TAvailabilityType = "under-order";


	if (available) {
		if (count === null) {
			availableType = "in-stock";
		} else if (count > 0) {
			availableType = "in-stock";
		} else {
			availableType = "under-order";
		}
	} else {
		availableType = "out-stock";
	}

	return <Availability type={availableType} count={count} />
};

export { AvailabilityCompositor };