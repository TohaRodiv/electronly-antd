import { TCategories } from "#types/categories/TCategories";
import { createContext, FC, PropsWithChildren, useContext } from "react";


export type TAppProviderProps = PropsWithChildren<{
	value: {
		categories: TCategories | null
	}
}>

const appData: {
	categories: TCategories | null
} = {
	categories: [],
};

export const AppContext = createContext(appData);

export const AppProvider: FC<TAppProviderProps> = ({
	children,
	value,
}) => {
	return <AppContext.Provider value={value} children={children} />;
}

export const useAppData = () => useContext(AppContext);