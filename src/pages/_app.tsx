import { AppLayout } from "#templates/app-layout";
import { BackTop, ConfigProvider, message } from "antd";
import type { AppProps } from "next/app"
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import NProgress from "nprogress";
import { NextPage } from "next";
import { AppProvider } from "src/context/AppContext";
import "../styles/style.scss";
import { DefaultSeo } from "next-seo";
import { seo } from "#data/seo";
import { TCategories } from "#types/categories/TCategories";
import { ShopCategoryService } from "#services/frontend/api/ShopCategoryService";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}


function App({ Component, pageProps }: AppPropsWithLayout) {

	const router = useRouter();
	const [categories, setCategories] = useState<TCategories | null>(null);

	useEffect(() => {

		(async () => {
			const { payload, error, } = await ShopCategoryService.getMany();
			if (!error) {
				setCategories(payload);
			} else {
				console.error(`Error fetch categories. ${error.message}: ${error.statusCode}`);
			}
		})();

		const handleStart = () => {
			NProgress.start();
		}

		const handleStop = () => {
			NProgress.done();
		}

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		}

	}, []);

	const pageLayout = (page: ReactElement) => page;
	const appLayout = ((page: ReactElement) => <AppLayout>{page}</AppLayout>);

	const getLayout = Component.getLayout ? pageLayout : appLayout;

	return (
		<ConfigProvider>
			<AppProvider value={{categories}}>
				<DefaultSeo {...seo} />
				{getLayout(<Component {...pageProps} />)}
				<BackTop />
			</AppProvider>
		</ConfigProvider>
	);
}

export default App;
