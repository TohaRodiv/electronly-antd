import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type TProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	fluid?: boolean;
}

const Container: FC <TProps> = ({
	children,
	fluid,
	...props
}) => {
	const classes = classNames(
		styles.container,
		{
			[styles["container--fluid"]]: fluid
		}
	);

	return (
		<div className={classes} {...props}>
			{children}
		</div>
	);
}

export { Container };