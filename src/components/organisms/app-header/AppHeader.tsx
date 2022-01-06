import { Container } from "#atoms/container";
import { BasicProps, Header } from "antd/lib/layout/layout";
import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { MainMenu } from "#molecules/main-menu";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { DrawerCatalog } from "#organisms/drawer-catalog";
import styles from "./style.module.scss";
import { AppLogo } from "#molecules/app-logo";

type TProps = BasicProps & {}

const AppHeader: FC<TProps> = ({
	className,
	...props
}) => {
	const [collapsedMenu, setCollapsedMenu] = useState(false);
	const [show, setShow] = useState(false);

	const toggleCollapsedMenu = () => {
		setCollapsedMenu(!collapsedMenu);
	}

	useEffect(() => {
		setShow(true);
	}, []);

	const classes = classNames(styles["app-header"], className);

	/**
	 * @TODO: Реализовать поиск
	 */
	return (
		<>
			<Header className={classes} {...props}>
				<Container>
					<div className={styles["app-header__inner"]}>
						<AppLogo />
						<MenuOutlined className={styles["app-header__toggle-menu"]} onClick={toggleCollapsedMenu} />
						{
							show && <MainMenu className={styles["app-header__main-menu"]} />
						}
						{/* <SearchOutlined /> */}
					</div>
				</Container>
			</Header>
			<DrawerCatalog
				onClose={toggleCollapsedMenu}
				visible={collapsedMenu}
				show={show} />
		</>
	);
};

export { AppHeader };