import styles from "../../css/shared/Embed.module.scss";

type Props = {
	src: string;
	type?: string;
	width?: string;
	height?: string;
};

const Embed = ({
	src,
	type = "application/pdf",
	width = "100%",
	height = "100%",
}: Props) => {
	return (
		<embed
			src={src}
			type={type}
			className={styles.Embed}
			width={width}
			height={height}
		></embed>
	);
};

export default Embed;

Embed.defaultProps = {};

Embed.propTypes = {};
