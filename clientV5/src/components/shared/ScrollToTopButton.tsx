import { useState, useEffect, useCallback } from "react";
import styles from "../../css/shared/ScrollToTopButton.module.scss";
import sprite from "../../assets/icons/portfolio.svg";

const ScrollToTopButton = () => {
	// this should be memoized or cached w/ useCallback
	const [scrollPos, setScrollPos] = useState(0);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const handleScrollPos = useCallback(() => {
		const position = window.scrollY;
		setScrollPos(position);
	}, []);

	// adds scroll listener
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		window.addEventListener("scroll", handleScrollPos, { passive: true });

		return () => {
			isMounted = false;
			window.removeEventListener("scroll", handleScrollPos);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* We make sure user has scroll at least the height of viewport before showing button */}
			{scrollPos >= window.innerHeight && (
				<button
					type="button"
					className={styles.ScrollToTopButton}
					onClick={scrollToTop}
				>
					<svg className={styles.ScrollToTopButton_icon}>
						<use xlinkHref={`${sprite}#icon-chevron-up`}></use>
					</svg>
				</button>
			)}
		</>
	);
};

export default ScrollToTopButton;

ScrollToTopButton.defaultProps = {};

ScrollToTopButton.propTypes = {};
