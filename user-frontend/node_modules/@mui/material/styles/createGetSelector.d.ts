declare const _default: <T extends {
    colorSchemeSelector?: "media" | "class" | "data" | string;
    colorSchemes?: Record<string, any>;
    defaultColorScheme?: string;
    cssVarPrefix?: string;
}>(theme: T) => (colorScheme: keyof T["colorSchemes"] | undefined, css: Record<string, any>) => string | {
    ':root': Record<string, any>;
    "@media (prefers-color-scheme: dark)": {
        ':root': Record<string, any>;
    };
} | {
    [x: string]: Record<string, any>;
    ':root'?: undefined;
    "@media (prefers-color-scheme: dark)"?: undefined;
} | {
    ':root': {
        [x: string]: any;
    };
    "@media (prefers-color-scheme: dark)"?: undefined;
};
export default _default;
