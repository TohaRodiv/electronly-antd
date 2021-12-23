import { Container } from "#atoms/container";
import { BasicProps, Footer } from "antd/lib/layout/layout";
import { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

type TProps = BasicProps & {}

const AppFooter: FC<TProps> = ({
	className,
	...props
}) => {
	const classes = classNames(styles["app-footer"], className);

	return (
		<Footer className={classes} {...props}>
			<Container>
				{(new Date).getFullYear()} &copy; Electronly
			</Container>
		</Footer>
	);
};

export { AppFooter };