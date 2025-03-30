import React, { JSX } from "react";

function createGenericComponent<T extends keyof JSX.IntrinsicElements>(
	styledClassName: string,
	componentType: T
) {
	if (!styledClassName)
		return React.forwardRef<HTMLElement, JSX.IntrinsicElements[T]>(
			(props, ref) =>
				React.createElement(componentType, {
					...props,
					ref,
				})
		);
	const baseComponent = React.forwardRef<HTMLElement, JSX.IntrinsicElements[T]>(
		({ className, ...props }, ref) =>
			React.createElement(componentType, {
				...props,
				ref,
				className: [styledClassName, className].join(" "),
			})
	);
	const styleName = styledClassName.substring(
		styledClassName.lastIndexOf("__") + 2
	);
	baseComponent.displayName = `${componentType}.${styleName[0].toUpperCase()}${styleName.slice(
		1
	)}`;
	return baseComponent;
}

export const newStyledComponent = {
	button: (styledClassName: string) =>
		createGenericComponent(styledClassName, "button"),
	div: (styledClassName: string) =>
		createGenericComponent(styledClassName, "div"),
	main: (styledClassName: string) =>
		createGenericComponent(styledClassName, "main"),
	span: (styledClassName: string) =>
		createGenericComponent(styledClassName, "span"),
	h1: (styledClassName: string) =>
		createGenericComponent(styledClassName, "h1"),
	h2: (styledClassName: string) =>
		createGenericComponent(styledClassName, "h2"),
	h3: (styledClassName: string) =>
		createGenericComponent(styledClassName, "h3"),
	h4: (styledClassName: string) =>
		createGenericComponent(styledClassName, "h4"),
	h5: (styledClassName: string) =>
		createGenericComponent(styledClassName, "h5"),
	h6: (styledClassName: string) =>
		createGenericComponent(styledClassName, "h6"),
	ul: (styledClassName: string) =>
		createGenericComponent(styledClassName, "ul"),
	ol: (styledClassName: string) =>
		createGenericComponent(styledClassName, "ol"),
	li: (styledClassName: string) =>
		createGenericComponent(styledClassName, "li"),
	input: (styledClassName: string) =>
		createGenericComponent(styledClassName, "input"),
	select: (styledClassName: string) =>
		createGenericComponent(styledClassName, "select"),
	option: (styledClassName: string) =>
		createGenericComponent(styledClassName, "option"),
	label: (styledClassName: string) =>
		createGenericComponent(styledClassName, "label"),
	form: (styledClassName: string) =>
		createGenericComponent(styledClassName, "form"),
	table: (styledClassName: string) =>
		createGenericComponent(styledClassName, "table"),
	thead: (styledClassName: string) =>
		createGenericComponent(styledClassName, "thead"),
	tbody: (styledClassName: string) =>
		createGenericComponent(styledClassName, "tbody"),
	tr: (styledClassName: string) =>
		createGenericComponent(styledClassName, "tr"),
	td: (styledClassName: string) =>
		createGenericComponent(styledClassName, "td"),
	th: (styledClassName: string) =>
		createGenericComponent(styledClassName, "th"),
	img: (styledClassName: string) =>
		createGenericComponent(styledClassName, "img"),
	header: (styledClassName: string) =>
		createGenericComponent(styledClassName, "header"),
	textarea: (styledClassName: string) =>
		createGenericComponent(styledClassName, "textarea"),
	p: (styledClassName: string) => createGenericComponent(styledClassName, "p"),
	a: (styledClassName: string) => createGenericComponent(styledClassName, "a"),
};
