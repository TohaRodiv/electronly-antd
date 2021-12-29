import { FC } from "react";
import { TCategories } from "src/types/categories/TCategories";
import { CategoryListItem } from "./CategoryListItem";
import styles from "./style.module.scss";

type TProps = {
	categories: TCategories
}

const CategoryList: FC<TProps> = ({
	categories,
}) => {

	if (!categories) {
		return null;
	}

	return (
		<ul className={styles["category-list"]}>
			{
				categories.map(category => (
					<li className={styles["category-list__item"]} key={category.id}>
						<CategoryListItem category={category} className={styles["category-list__block"]} />
					</li>
				))
			}
		</ul>
	);
};

export { CategoryList };