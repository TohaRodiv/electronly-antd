export const DateService = new class {
	public getFormattedHuman(value: Date): string {
		return new Date(value).toLocaleString("ru", {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			timeZone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		});
	}
}