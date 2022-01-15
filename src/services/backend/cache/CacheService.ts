import type { ServerResponse } from "http";

export const CacheService = new class {
	public setCachePage(res: ServerResponse) {
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=3600, stale-while-revalidate=72000"
		);
	}
}