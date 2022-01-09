import { List, ListProps, } from "antd";
import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Link } from "#atoms/link";
import { usefullMenu } from "#data/usefull-menu";
import { Space } from "#molecules/space";
import styles from "./style.module.scss";

type TProps = ListProps<any> & {
	icon?: ReactNode
	theme?: "light" | "dark"
}

const UsefullMenu: FC<TProps> = ({
	className,
	icon,
	theme,
	...props
}) => {
	const classes = classNames(
		styles["usefull-menu"],
		{
			[styles[`usefull-menu--theme--${theme}`]]: !!theme,
		},
		className
	);

	return (
		<List className={classes} {...props}>
			{
				usefullMenu && usefullMenu.map((item, index) => (
					<List.Item key={`usefull-${index}`} className={styles["usefull-menu__item"]}>
						<Link href={item.path} className={styles["usefull-menu__link"]}>
							<Space>
								{icon}
								{item.title}
							</Space>
						</Link>
					</List.Item>
				))
			}
		</List>
	);
};

UsefullMenu.defaultProps = {
	theme: "dark",
}

export { UsefullMenu };