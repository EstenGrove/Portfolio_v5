import { escapeRegex } from "../../utils/utils_text";

type Props = {
	text: string;
	highlight?: string;
};

const Highlighter = ({ text = "", highlight = "" }: Props) => {
	if (!highlight.trim()) {
		return <span>{text}</span>;
	}
	const regex = new RegExp(`(${escapeRegex(highlight)})`, "gi");
	const parts = text.split(regex);
	return (
		<span>
			{parts
				.filter((part) => part)
				.map((part, i) =>
					regex.test(part) ? (
						<mark key={i}>{part}</mark>
					) : (
						<span key={i}>{part}</span>
					)
				)}
		</span>
	);
};

export default Highlighter;

Highlighter.defaultProps = {};

Highlighter.propTypes = {};
