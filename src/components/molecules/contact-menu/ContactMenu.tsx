import { List, ListProps } from "antd";
import { FC } from "react";
import { contacts } from "#data/contacts";
import { getAddressItems, getTelItems, getEmailItems, getSocialItems } from "./utils";
import styles from "./style.module.scss";
import classNames from "classnames";

type TProps = ListProps<any> & {
	theme?: "light" | "dark"
}

const ContactMenu: FC<TProps> = ({
	className,
	theme,
	...props
}) => {

	const { addresses, tels, emails, socials, } = contacts;

	const classes = classNames(
		styles["contact-menu"],
		{
			[styles[`contact-menu--theme--${theme}`]]: !!theme,
		},
		className
	);

	return (
		<List className={classes} {...props}>
			{
				[
					getAddressItems(addresses),
					getTelItems(tels),
					getEmailItems(emails),
					getSocialItems(socials),
				]
			}
		</List>
	);
};

ContactMenu.defaultProps = {
	theme: "dark",
}

export {
	ContactMenu
};