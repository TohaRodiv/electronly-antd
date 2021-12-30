type TMainMenuItem = {
	path: string
	title: string
	icon?: string
}

export const mainMenu: TMainMenuItem[] = [
	{
		path: "/",
		title: "Главная",
	},
	{
		path: "/catalog",
		title: "Каталог",
	},
	{
		path: "/news",
		title: "Новости",
	},
];