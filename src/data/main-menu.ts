type TMainMenuItem = {
	path: string
	title: string
	icon?: string
}

export const mainMenu: TMainMenuItem[] = [
	{
		path: "/catalog",
		title: "Каталог",
	},
	{
		path: "/about",
		title: "О нас",
	},
	{
		path: "/payment-and-delivery",
		title: "Оплата и доставка",
	},
	{
		path: "/news",
		title: "Новости",
	},
	{
		path: "/contacts",
		title: "Контакты",
	},
];