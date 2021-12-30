import { Layout } from "antd";
import { BasicProps, } from "antd/lib/layout/layout";
import React from "react";
import { FC } from "react";
import styles from "./style.module.scss";
import { AppFooter } from "#organisms/app-footer";
import { AppHeader } from "#organisms/app-header";
import { AppContent } from "#organisms/app-content";

type TProps = BasicProps & {}

const AppLayout: FC<TProps> = ({
	children,
	...props
}) => {
	return (
		<Layout {...props}>
			<AppHeader
				className={styles["app-layout__header"]} />

			<AppContent
				className={styles["app-layout__main"]}>
				{children}
			</AppContent>

			<AppFooter
				className={styles["app-layout__footer"]} />
		</Layout>
	);
}

export { AppLayout };