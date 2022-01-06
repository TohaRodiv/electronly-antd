import { Link } from "#atoms/link";
import { MailOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { FC } from "react";

type TProps = MenuProps & {}

const ContactMenu: FC<TProps> = ({
	...props
}) => {
	return (
		<Menu {...props}>
			<Menu.Item icon={<MailOutlined />}>
				<Link href="/contacts">
					electronly@info.ru
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export {
	ContactMenu
};