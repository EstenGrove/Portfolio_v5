import React from "react";
import styles from "../../css/home/QuotesSection.module.scss";
import Title from "../shared/Title";
import Testimonials from "./Testimonials";

type Props = {};

const quotes = [
	{
		quote:
			"Steven was a pleasure to work with and one of the most open-minded productive people Ive had to joy to work with. He was always thinking about how to better serve our customers needs and iterating on ways to do just that!",
		quoteFrom: "Alisha Carvella",
	},
	{
		quote:
			"He spearheaded the migration for a very old and delicate codebase and transformed it into a modern tech stack with a much longer sustainability cycle. He allowed us to continue growing our software to meet the business needs. Could not be happier with his work!",
		quoteFrom: "Dan Schneider",
	},
	{
		quote:
			"He's one of those people whose energy just fosters a rich and collaborative environment where everyone is giving their best. He's definitely got a way of inspiring people to think more deeply about a problem or idea until it reaches its best possible shape. If you need software work, he's the best I've worked with!",
		quoteFrom: "Terry Piscente",
	},
];

const QuotesSection = ({}: Props) => {
	return (
		<section className={styles.QuotesSection}>
			<Title title="testimonials" />
			<Testimonials testimonials={quotes} />
			{/*  */}
		</section>
	);
};

export default QuotesSection;

QuotesSection.defaultProps = {};

QuotesSection.propTypes = {};
