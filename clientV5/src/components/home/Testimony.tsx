import React from "react";
import styles from "../../css/home/Testimony.module.scss";

type Props = {
	testimony: TTestimony;
};

export interface TTestimony {
	quote: string; // quote
	quoteFrom: string; // person's name
}

const Testimony = ({ testimony }: Props) => {
	return (
		<div className={styles.Testimony}>
			<div className={styles.Testimony_inner}>
				<blockquote className={styles.Testimony_inner_quote}>
					{testimony.quote}
				</blockquote>
				<div className={styles.Testimony_inner_from}>
					- {testimony.quoteFrom}
				</div>
			</div>
		</div>
	);
};

export default Testimony;

Testimony.defaultProps = {};

Testimony.propTypes = {};
