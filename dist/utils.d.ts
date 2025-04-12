type JsonValue = string | number | boolean;
interface JsonObject {
    [key: string]: JsonValue;
}
interface cssModule {
    readonly [key: string]: string;
}
export declare function resolveStyleVariants(styles: cssModule, variants: JsonObject): string;
export {};
