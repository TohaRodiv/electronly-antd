import { FC } from "react";
import NextLink, { LinkProps } from "next/link";
import AnchorLink from "antd/lib/anchor/AnchorLink";

type TProps = LinkProps & {
	text?: string
	className?: string
}

const Link: FC <TProps> = ({
	passHref: _passHref,
	text,
	className,
	children,
	...props
}) => {
	return (
		<NextLink passHref {...props}>
			<a className={className}>
				{text || children}
			</a>
		</NextLink>
	);
};

export { Link };