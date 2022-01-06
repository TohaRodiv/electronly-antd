import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "#atoms/link";

type TProps = {
	className?: string
	classNameArrow?: string
	scrollTo?: string
};

const ButtonScrollDown: FC<TProps> = ({
	className,
	classNameArrow,
	scrollTo,
}) => {

	const classes = classNames(styles["button-scroll-down"], className);
	const classesArrow = classNames(styles["button-scroll-down__item"], classNameArrow);
	return (
		<Link
			href={`#${scrollTo}`}
			className={classes}>
			<span className={classesArrow}></span>
		</Link>
	);
};

export { ButtonScrollDown };