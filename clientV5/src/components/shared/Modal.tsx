import { useEffect, useRef, ReactNode, MutableRefObject } from "react";
import styles from "../../css/shared/Modal.module.scss";
import sprite from "../../assets/icons/portfolio.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type Props = {
	title?: string;
	closeModal: () => void;
	children?: ReactNode;
};

const Modal = ({ title, closeModal, children }: Props) => {
	const modalRef = useRef<HTMLElement | null>(null);
	const isOutside = useOutsideClick(modalRef as MutableRefObject<HTMLElement>);
	// useLockBodyScroll();

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) return;

		if (isOutside) {
			closeModal();
		}
		return () => {
			isMounted = false;
		};
	}, [isOutside, closeModal]);
	return (
		<aside className={styles.Modal} ref={modalRef}>
			<div className={styles.Modal_top}>
				<h1 className={styles.Modal_top_title}>{title}</h1>
				<div className={styles.Modal_top_close} onClick={closeModal}>
					<svg className={styles.Modal_top_close_icon}>
						<use xlinkHref={`${sprite}#icon-clear`}></use>
					</svg>
				</div>
			</div>
			<div className={styles.Modal_inner}>{children}</div>
		</aside>
	);
};

export default Modal;

Modal.defaultProps = {};

Modal.propTypes = {};
