import { CSSProperties } from "react";
import css from "../../css/shared/Image.module.scss";

type Props = {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
	styles?: CSSProperties;
	loading?: "eager" | "lazy";
	fetchPriority?: "high" | "low" | "auto" | undefined;
};

const Image = ({
	src,
	alt = "Rendered image",
	width = 500,
	height = 500,
	className = "",
	styles = {},
	loading = "lazy",
	fetchPriority = "auto",
}: Props) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={`${css.Image} ${className}`}
			fetchPriority={fetchPriority}
			loading={loading}
			style={styles}
		/>
	);
};

export default Image;
