export const StringService = new class {
	public cutEllipsisText(string: string, maxCharsCount: number, dots: string = "...") {
		if (string.length > maxCharsCount - dots.length) {
			return `${string.substring(0, maxCharsCount - dots.length)}${dots}`;
		} else {
			return string;
		}
	}
}