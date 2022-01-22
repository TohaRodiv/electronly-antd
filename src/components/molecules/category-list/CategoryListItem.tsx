import Title from "antd/lib/typography/Title";
import { FC } from "react";
import { TCategory } from "src/types/categories/TCategory";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { Image } from "#atoms/image";
import LogoImage from "#public/images/logo.svg";

type TProps = {
	category: TCategory
	className?: string
}

const CategoryListItem: FC<TProps> = ({
	category,
	className,
}) => {

	const classes = classNames(styles["category-list-item"], className);

	const previewImage = category.images.length > 0 ? category.images[0].path : LogoImage;

	return (
		<Link href={`/catalog/${category.id}`} className={classes}>
			<div className={styles["category-list-item__body"]}>
				<Image
					objectFit="contain"
					className={styles["category-list-item__image"]}
					width={150}
					height={150}
					src={previewImage}
					alt={category.title} />
				<Title level={4} className={styles["category-list-item__title"]}>{category.title}</Title>
			</div>
		</Link>
	);
};

export { CategoryListItem };