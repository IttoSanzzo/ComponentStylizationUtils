"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveStyleVariants = resolveStyleVariants;
function resolveStyleVariants(styles, variants) {
    return Object.entries(variants)
        .map(([key, value]) => styles[`${key}-${value}`])
        .join(" ");
}
