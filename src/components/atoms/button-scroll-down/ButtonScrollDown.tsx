import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type TProps = {
	className?: string
	classNameArrow?: string
};

const ButtonScrollDown: FC<TProps> = ({
	className,
	classNameArrow,
}) => {

	const classes = classNames(styles["button-scroll-down"], className);
	const classesArrow = classNames(styles["button-scroll-down__item"], classNameArrow);
	return (
		<span
			className={classes}>
			<span className={classesArrow}></span>
		</span>
	);
};

export { ButtonScrollDown };