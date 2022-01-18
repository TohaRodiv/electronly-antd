import { Layout } from "antd";
import { BasicProps, } from "antd/lib/layout/layout";
import React from "react";
import { FC } from "react";
import styles from "./style.module.scss";
import { AppFooter } from "#organisms/app-footer";
import { AppHeader } from "#organisms/app-header";
import { AppContent } from "#organisms/app-content";
import Head from "next/head";

type TProps = BasicProps & {}

const AppLayout: FC<TProps> = ({
	children,
	...props
}) => {
	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="apple-mobile-web-app-title" content="Electronly" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="application-name" content="Electronly" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<Layout {...props} className={styles["app-layout"]}>
				<AppHeader
					className={styles["app-layout__header"]} />

				<AppContent
					className={styles["app-layout__main"]}>
					{children}
				</AppContent>

				<AppFooter
					className={styles["app-layout__footer"]} />
			</Layout>
		</>
	);
}

export { AppLayout };