import React, { JSX } from "react";

function createGenericElement<T extends keyof JSX.IntrinsicElements>(
	styledClassName: string,
	elementType: T
) {
	if (!styledClassName)
		return React.forwardRef<HTMLElement, JSX.IntrinsicElements[T]>(
			(props, ref) =>
				React.createElement(elementType, {
					...props,
					ref,
				})
		);
	const baseElement = React.forwardRef<HTMLElement, JSX.IntrinsicElements[T]>(
		({ className, ...props }, ref) =>
			React.createElement(elementType, {
				...props,
				ref,
				className: [styledClassName, className].join(" "),
			})
	);
	const styleName = styledClassName.substring(
		styledClassName.lastIndexOf("__") + 2
	);
	baseElement.displayName = `${elementType}.${styleName[0].toUpperCase()}${styleName.slice(
		1
	)}`;
	return baseElement;
}

export const newStyledElement = {
	button: (styledClassName: string) =>
		createGenericElement(styledClassName, "button"),
	div: (styledClassName: string) =>
		createGenericElement(styledClassName, "div"),
	main: (styledClassName: string) =>
		createGenericElement(styledClassName, "main"),
	span: (styledClassName: string) =>
		createGenericElement(styledClassName, "span"),
	h1: (styledClassName: string) => createGenericElement(styledClassName, "h1"),
	h2: (styledClassName: string) => createGenericElement(styledClassName, "h2"),
	h3: (styledClassName: string) => createGenericElement(styledClassName, "h3"),
	h4: (styledClassName: string) => createGenericElement(styledClassName, "h4"),
	h5: (styledClassName: string) => createGenericElement(styledClassName, "h5"),
	h6: (styledClassName: string) => createGenericElement(styledClassName, "h6"),
	ul: (styledClassName: string) => createGenericElement(styledClassName, "ul"),
	ol: (styledClassName: string) => createGenericElement(styledClassName, "ol"),
	li: (styledClassName: string) => createGenericElement(styledClassName, "li"),
	input: (styledClassName: string) =>
		createGenericElement(styledClassName, "input"),
	select: (styledClassName: string) =>
		createGenericElement(styledClassName, "select"),
	option: (styledClassName: string) =>
		createGenericElement(styledClassName, "option"),
	label: (styledClassName: string) =>
		createGenericElement(styledClassName, "label"),
	form: (styledClassName: string) =>
		createGenericElement(styledClassName, "form"),
	table: (styledClassName: string) =>
		createGenericElement(styledClassName, "table"),
	thead: (styledClassName: string) =>
		createGenericElement(styledClassName, "thead"),
	tbody: (styledClassName: string) =>
		createGenericElement(styledClassName, "tbody"),
	tr: (styledClassName: string) => createGenericElement(styledClassName, "tr"),
	td: (styledClassName: string) => createGenericElement(styledClassName, "td"),
	th: (styledClassName: string) => createGenericElement(styledClassName, "th"),
	img: (styledClassName: string) =>
		createGenericElement(styledClassName, "img"),
	header: (styledClassName: string) =>
		createGenericElement(styledClassName, "header"),
	textarea: (styledClassName: string) =>
		createGenericElement(styledClassName, "textarea"),
	p: (styledClassName: string) => createGenericElement(styledClassName, "p"),
	a: (styledClassName: string) => createGenericElement(styledClassName, "a"),
};
