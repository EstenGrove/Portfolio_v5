import React, { ReactNode } from "react";
import styles from "../../css/shared/HoverCard.module.scss";

type Props = {
	isOpen: boolean;
	children?: ReactNode;
};

// REQUIREMENTS:
// - Card component that displays when hovering an element, that triggers it

const HoverCard = ({ isOpen = false, children }: Props) => {
	if (!isOpen) {
		return null;
	}
	return (
		<div className={styles.HoverCard}>
			<div className={styles.HoverCard_inner}>
				{/*  */}
				{/*  */}
				{children}
			</div>
		</div>
	);
};

export default HoverCard;
