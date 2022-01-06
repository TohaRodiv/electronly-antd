import { FC, ReactElement } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import Title from "antd/lib/typography/Title";
import { Space } from "#molecules/space";


type TProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
	icon?: ReactElement
	title?: string | ReactElement
	buttons?: ReactElement[]
}

const Section: FC<TProps> = ({
	className,
	icon,
	title,
	buttons,
	children,
	...props
}) => {
	const classes = classNames(styles["section"], className);

	return (
		<section className={classes} {...props}>
			{
				(icon || title) && (
					<header className={styles["section__header"]}>
						<div className={styles["section__head-inner"]}>
							<span className={styles["section__icon"]}>
								{icon}
							</span>
							<Title level={4} className={styles["section__head"]}>{title}</Title>
						</div>
					</header>
				)
			}
			<article className={styles["section__article"]}>
				{children}
			</article>
			{
				buttons && (
					<footer className={styles["section__footer"]}>
						<Space display="flex" justifyContent="center">
							{
								buttons
							}
						</Space>
					</footer>
				)
			}
		</section>
	);
};

export { Section };