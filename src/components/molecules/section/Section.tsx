import { FC, ReactElement } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Space } from "antd";
import Title from "antd/lib/typography/Title";


type TProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
	icon?: ReactElement
	title?: string | ReactElement
}

const Section: FC <TProps> = ({
	className,
	icon,
	title,
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
		</section>
	);
};

export { Section };