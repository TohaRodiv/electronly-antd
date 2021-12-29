import { ApiOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { FC } from "react";
import { TCategory } from "src/types/categories/TCategory";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "#atoms/link";

type TProps = {
	category: TCategory
	className?: string
}

const CategoryListItem: FC <TProps> = ({
	category,
	className,
}) => {

	const classes = classNames(styles["category-list-item"], className);

	return (
		<Link href={`/catalog/${category.id}`} className={classes}>
			{/* <img src="" alt=""/> */}
			<div className={styles["category-list-item__body"]}>
				<ApiOutlined className={styles["category-list-item__icon"]} />
				<Title level={4} className={styles["category-list-item__title"]}>{category.title}</Title>
			</div>
		</Link>
	);
};

export { CategoryListItem };