import React, { CSSProperties, ReactNode } from "react";
import cssModule from "../../css/layout/Row.module.scss";

type Props = {
	children?: ReactNode;
	width?: string | number;
	height?: string | number;
	justify?: string;
	align?: string;
	gap?: number | string;
	wrap?: boolean;
	className?: string;
	styles?: CSSProperties;
};

interface TJustifyClass {
	start: string;
	end: string;
	center: string;
	around: string;
	between: string;
	evenly: string;
	stretch: string;
}
interface TAlignClass {
	start: string;
	end: string;
	center: string;
	around: string;
	between: string;
	evenly: string;
	stretch: string;
}
interface TWrapClass {
	wrap: string;
	nowrap: string;
}

interface TClasses {
	justify: TJustifyClass;
	align: TAlignClass;
	wrap: TWrapClass;
}

const classesMap: TClasses = {
	justify: {
		start: cssModule.rowStart,
		end: cssModule.rowEnd,
		center: cssModule.rowCenter,
		around: cssModule.rowAround,
		between: cssModule.rowBetween,
		evenly: cssModule.rowEvenly,
		stretch: cssModule.rowStretch,
	},
	align: {
		start: cssModule.colStart,
		end: cssModule.colEnd,
		center: cssModule.colCenter,
		around: cssModule.colAround,
		between: cssModule.colBetween,
		evenly: cssModule.colEvenly,
		stretch: cssModule.colStretch,
	},
	wrap: {
		wrap: cssModule.wrap,
		nowrap: cssModule.noWrap,
	},
};

// take props and calculate what classes to apply based off them
const getClasses = ({
	justify,
	align,
	wrap,
	className,
}: {
	justify: string;
	align: string;
	wrap: boolean;
	className: string | undefined;
}) => {
	const base = cssModule.Row;
	const row = classesMap.justify[justify as keyof TJustifyClass];
	const col = classesMap.align[align as keyof TAlignClass];
	const rowWrap = wrap ? classesMap.wrap["wrap"] : classesMap.wrap["nowrap"];

	const classList = [base, row, col, rowWrap, className].join(" ");

	return classList;
};

const Row = ({
	width = "auto",
	height = "auto",
	justify = "start",
	align = "center",
	gap = 0,
	wrap = false,
	className,
	children,
	styles = {},
}: Props) => {
	const cssStyles: CSSProperties = {
		width: width,
		height: height,
		gap: `0 ${gap}rem`,
		...styles,
	};

	const classes = getClasses({ justify, align, wrap, className });

	return (
		// <div className={classes} style={cssStyles}>
		<div className={classes} style={cssStyles}>
			{children}
		</div>
	);
};

export default Row;

Row.defaultProps = {};

Row.propTypes = {};
