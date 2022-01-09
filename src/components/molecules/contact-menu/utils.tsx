import { Link } from "#atoms/link";
import { Space } from "#molecules/space";
import { TAddress, TTel, TEmail, TSocialItem, TSocial } from "#types/contacts/TContact";
import { HomeOutlined, PhoneOutlined, MailOutlined, WhatsAppOutlined, WarningOutlined, InstagramOutlined } from "@ant-design/icons";
import { List } from "antd";
import styles from "./style.module.scss";

export const getAddressItems = (addresses: TAddress[]) =>
	addresses
		.filter(address => address.active)
		.map((address, index) => (
			<List.Item key={`address-${index}`} className={styles["contact-menu__item"]}>
				<Link href="/contacts" className={styles["contact-menu__link"]}>
					<Space>
						<HomeOutlined />
						{address.value}
					</Space>
				</Link>
			</List.Item>
		));


export const getTelItems = (tels: TTel[]) =>
	tels
		.filter(tel => tel.active)
		.map((tel, index) => {
			const clearedTel = tel.value.replace(/\D/g, "");
			return (
				<List.Item key={`tel-${index}`} className={styles["contact-menu__item"]}>
					<Link href={`tel:+${clearedTel}`} className={styles["contact-menu__link"]}>
						<Space>
							<PhoneOutlined />
							{tel.value}
						</Space>
					</Link>
				</List.Item>
			);
		});

export const getEmailItems = (emails: TEmail[]) =>
	emails
		.filter(email => email.active)
		.map((email, index) => (
			<List.Item key={`email-${index}`} className={styles["contact-menu__item"]}>
				<Link href={`mailto:${email.value}`} className={styles["contact-menu__link"]}>
					<Space>
						<MailOutlined />
						{email.value}
					</Space>
				</Link>
			</List.Item>
		));

export const getSocialIconByType = (type: string) => {
	switch (type) {
		case "whatsapp": return <WhatsAppOutlined />;
		case "vk": return <WarningOutlined />;
		case "telegram": return <WarningOutlined />;
		case "instagram": return <InstagramOutlined />;
	}
}

export const getSocialItem = (socialItems: TSocialItem[], type: string) =>
	socialItems
		.filter(social => social.active)
		.map((social, index) => (
			<List.Item key={`social-${index}-${social.value}`} className={styles["contact-menu__item"]}>
				<a href={social.url} target="_blank" className={styles["contact-menu__link"]} rel="noreferrer">
					<Space>
						{getSocialIconByType(type)}
						{social.value}
					</Space>
				</a>
			</List.Item>
		))

export const getSocialItems = (socials: TSocial) =>
	Object
		.entries(socials)
		.map(([socialType, social]) => {
			return getSocialItem(social, socialType);
		});