import { TBanner } from "#types/banner/TBanner";
import { Carousel } from "antd";
import { FC } from "react";
import { CarouselItem } from "./CarouselItem";

type TProps = {
	banners: TBanner[];
	scrollTo?: string
};

const MainCarousel: FC<TProps> = ({
	banners,
	scrollTo,
}) => {
	return (
		<Carousel
			autoplay={true}
			effect="fade"
			dotPosition="right">
			{
				banners.map(banner => (
					<CarouselItem
						scrollTo={scrollTo}
						banner={banner}
						key={banner.id} />
				))
			}
		</Carousel>
	);
};

export { MainCarousel };