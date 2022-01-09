import { Input } from "antd";
import { SearchProps } from "antd/lib/input/Search";
import { useRouter } from "next/router";
import { FC } from "react";

type TProps = SearchProps

const ProductSearchForm: FC<TProps> = ({
	...props
}) => {
	const router = useRouter();

	const handleSearch = (data: string) => {
		router.push(`/search/${data}`);
	};

	return (
		<Input.Search
			onSearch={handleSearch}
			{...props} />
	);
};

export {
	ProductSearchForm
};