import { Link } from "#atoms/link";
import { TCategory } from "#types/categories/TCategory";
import { ApiOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { FC, ReactNode } from "react";

type TProps = {
	category: TCategory
	icon?: ReactNode
	className?: string
}

const CategoryLink: FC<TProps> = ({
	category,
	icon,
	className,
}) => {
	return (
		<Link href={`/catalog/${category.id}`} className={className}>
			<Space>
				{icon}
				{category.title}
			</Space>
		</Link>
	);
};

CategoryLink.defaultProps = {
	icon: <ApiOutlined />,
};

export {
	CategoryLink
};