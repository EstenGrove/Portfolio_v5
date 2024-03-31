import { ChangeEvent } from "react";
import styles from "../../css/skills/SkillsInput.module.scss";
import sprite from "../../assets/icons/portfolio.svg";

type Props = {
	val: string;
	name?: string;
	id?: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	clearInput: () => void;
	autoComplete?: "off" | "on";
};

const SkillsInput = ({
	name,
	id,
	val,
	handleChange,
	clearInput,
	autoComplete = "off",
}: Props) => {
	return (
		<div className={styles.SkillsInput}>
			<input
				type="text"
				name={name}
				id={id}
				value={val}
				onChange={handleChange}
				className={styles.SkillsInput_input}
				placeholder="Search for technology..."
				autoComplete={autoComplete}
			/>
			{/* Only show if text has been entered */}
			{val && val.length > 0 && (
				<svg className={styles.SkillsInput_clear} onClick={clearInput}>
					<use xlinkHref={`${sprite}#icon-clear`}></use>
				</svg>
			)}
		</div>
	);
};

export default SkillsInput;

SkillsInput.defaultProps = {};

SkillsInput.propTypes = {};
