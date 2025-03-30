type JsonValue = string | number | boolean;

interface JsonObject {
	[key: string]: JsonValue;
}

interface cssModule {
	readonly [key: string]: string;
}

export function resolveStyleVariants(
	styles: cssModule,
	variants: JsonObject
): string {
	return Object.entries(variants)
		.map(([key, value]) => styles[`${key}-${value}`])
		.join(" ");
}
