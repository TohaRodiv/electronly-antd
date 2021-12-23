import { createContext, FC, useContext } from "react";

const appData = {
	
};

export const AppContext = createContext(appData);

export const AppProvider: FC = ({
	children
}) => {
	return <AppContext.Provider value={appData} children={children} />;
}

export const useAppData = () => useContext(AppContext);