"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newStyledElement = void 0;
const react_1 = __importDefault(require("react"));
function createGenericElement(styledClassName, elementType) {
    if (!styledClassName)
        return react_1.default.forwardRef((props, ref) => react_1.default.createElement(elementType, Object.assign(Object.assign({}, props), { ref })));
    const baseElement = react_1.default.forwardRef((_a, ref) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return react_1.default.createElement(elementType, Object.assign(Object.assign({}, props), { ref, className: [styledClassName, className].join(" ") }));
    });
    const styleName = styledClassName.substring(styledClassName.lastIndexOf("__") + 2);
    baseElement.displayName = `${elementType}.${styleName[0].toUpperCase()}${styleName.slice(1)}`;
    return baseElement;
}
exports.newStyledElement = {
    button: (styledClassName) => createGenericElement(styledClassName, "button"),
    div: (styledClassName) => createGenericElement(styledClassName, "div"),
    main: (styledClassName) => createGenericElement(styledClassName, "main"),
    span: (styledClassName) => createGenericElement(styledClassName, "span"),
    h1: (styledClassName) => createGenericElement(styledClassName, "h1"),
    h2: (styledClassName) => createGenericElement(styledClassName, "h2"),
    h3: (styledClassName) => createGenericElement(styledClassName, "h3"),
    h4: (styledClassName) => createGenericElement(styledClassName, "h4"),
    h5: (styledClassName) => createGenericElement(styledClassName, "h5"),
    h6: (styledClassName) => createGenericElement(styledClassName, "h6"),
    ul: (styledClassName) => createGenericElement(styledClassName, "ul"),
    ol: (styledClassName) => createGenericElement(styledClassName, "ol"),
    li: (styledClassName) => createGenericElement(styledClassName, "li"),
    input: (styledClassName) => createGenericElement(styledClassName, "input"),
    select: (styledClassName) => createGenericElement(styledClassName, "select"),
    option: (styledClassName) => createGenericElement(styledClassName, "option"),
    label: (styledClassName) => createGenericElement(styledClassName, "label"),
    form: (styledClassName) => createGenericElement(styledClassName, "form"),
    table: (styledClassName) => createGenericElement(styledClassName, "table"),
    thead: (styledClassName) => createGenericElement(styledClassName, "thead"),
    tbody: (styledClassName) => createGenericElement(styledClassName, "tbody"),
    tr: (styledClassName) => createGenericElement(styledClassName, "tr"),
    td: (styledClassName) => createGenericElement(styledClassName, "td"),
    th: (styledClassName) => createGenericElement(styledClassName, "th"),
    img: (styledClassName) => createGenericElement(styledClassName, "img"),
    header: (styledClassName) => createGenericElement(styledClassName, "header"),
    textarea: (styledClassName) => createGenericElement(styledClassName, "textarea"),
    p: (styledClassName) => createGenericElement(styledClassName, "p"),
    a: (styledClassName) => createGenericElement(styledClassName, "a"),
};
