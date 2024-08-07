import React from "react";
import styles from "../../css/home/Testimonials.module.scss";
import Testimony, { TTestimony } from "./Testimony";

type Props = {
	testimonials: TTestimony[];
};

const Testimonials = ({ testimonials }: Props) => {
	return (
		<div className={styles.Testimonials}>
			{testimonials.map((entry, idx) => (
				<Testimony key={`${idx}-TESTIMONIAL`} testimony={entry} />
			))}
		</div>
	);
};

export default Testimonials;

Testimonials.defaultProps = {};

Testimonials.propTypes = {};
