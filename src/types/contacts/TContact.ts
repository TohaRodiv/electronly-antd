export type TActiveField = {
	active: boolean
}

export type TAddress = TActiveField & {
	value: string
}

export type TTel = TActiveField & {
	value: string
}

export type TEmail = TActiveField & {
	value: string
}

export type TSocialItem = TActiveField & {
	value: string
	url: string
}

export type TSocial = {
	whatsapp: TSocialItem[]
	vk: TSocialItem[]
	telegram: TSocialItem[]
	instagram: TSocialItem[]
}

export type TContact = {
	addresses: TAddress[]
	tels: TTel[]
	emails: TEmail[]
	socials: TSocial
}