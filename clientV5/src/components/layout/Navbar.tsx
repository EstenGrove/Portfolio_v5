import React, {
	useEffect,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react";
import styles from "../../css/layout/Navbar.module.scss";
import sprite from "../../assets/icons/portfolio.svg";
import { NavLink, useLocation } from "react-router-dom";
import { TThemeState, ThemeContext } from "../../context/ThemeContext";
import SocialBar from "../shared/SocialBar";
import ThemeToggle from "../shared/ThemeToggle";
import Logo, { LogoText } from "../shared/Logo";
import Row from "./Row";
import Col from "./Col";

type TTheme = "light" | "dark";

const getTheme = (): TTheme => {
	const { theme } = document.documentElement.dataset;
	return theme as TTheme;
};
const changeTheme = () => {
	const currentTheme = document.documentElement.dataset.theme;
	const next = currentTheme === "light" ? "dark" : "light";
	document.documentElement.dataset.theme = next;
};

type Props = {};

type TCloseIconProps = {
	closeMenu: () => void;
};

type TMenuIconProps = {
	openMenu: () => void;
};
type TOverlayProps = {
	closeMenu: () => void;
};

const isActive = ({ isActive }: { isActive: boolean }) => {
	if (!isActive) return;
	return styles.isActive;
};

const CloseIcon = ({ closeMenu }: TCloseIconProps) => {
	return (
		<svg className={styles.CloseIcon} onClick={closeMenu}>
			<use xlinkHref={`${sprite}#icon-clear`}></use>
		</svg>
	);
};

const MenuIcon = ({ openMenu }: TMenuIconProps) => {
	return (
		<div className={styles.MenuIcon} onClick={openMenu}>
			<div className={styles.MenuIcon_line}></div>
			<div className={styles.MenuIcon_line}></div>
			<div className={styles.MenuIcon_line}></div>
		</div>
	);
};

const MobileOverlay = ({ closeMenu }: TOverlayProps) => {
	return (
		<aside className={styles.MobileOverlay}>
			<div className={styles.MobileOverlay_top}>
				<Row
					width="100%"
					justify="between"
					styles={{
						marginBottom: "1rem",
						borderBottom: "1px solid var(--border)",
						paddingBottom: ".5rem",
					}}
				>
					<LogoText />
					<CloseIcon closeMenu={closeMenu} />
				</Row>
				<Row width="100%" justify="start">
					<SocialBar>
						<ThemeToggle />
					</SocialBar>
				</Row>
			</div>
			<ul className={styles.MobileOverlay_list}>
				<Col gap="3">
					<li className={styles.MobileOverlay_list_item} onClick={closeMenu}>
						<NavLink to="/" className={isActive}>
							home<b>.</b>
						</NavLink>
					</li>
					<li className={styles.MobileOverlay_list_item} onClick={closeMenu}>
						<NavLink to="/about" className={isActive}>
							about<b>.</b>
						</NavLink>
					</li>
					<li className={styles.MobileOverlay_list_item} onClick={closeMenu}>
						<NavLink to="/projects" className={isActive}>
							projects<b>.</b>
						</NavLink>
					</li>
					<li className={styles.MobileOverlay_list_item} onClick={closeMenu}>
						<NavLink to="/snippets" className={isActive}>
							snippets<b>.</b>
						</NavLink>
					</li>
					<li className={styles.MobileOverlay_list_item} onClick={closeMenu}>
						<NavLink to="/contact" className={isActive}>
							contact<b>.</b>
						</NavLink>
					</li>
				</Col>
			</ul>
		</aside>
	);
};

const Navbar = () => {
	const [showMobileOverlay, setShowMobileOverlay] = useState<boolean>(false);

	const openMenu = () => {
		setShowMobileOverlay(true);
	};
	const closeMenu = () => {
		setShowMobileOverlay(false);
	};

	return (
		<nav className={styles.Navbar}>
			<div className={styles.Navbar_logo}>
				<NavLink to="/">
					s<b>{">"}</b>gore
				</NavLink>
			</div>
			<ul className={styles.Navbar_list}>
				<li className={styles.Navbar_list_item}>
					<NavLink to="/" className={isActive}>
						home<b>.</b>
					</NavLink>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to="/about" className={isActive}>
						about<b>.</b>
					</NavLink>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to="/projects" className={isActive}>
						projects<b>.</b>
					</NavLink>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to="/snippets" className={isActive}>
						snippets<b>.</b>
					</NavLink>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to="/contact" className={isActive}>
						contact<b>.</b>
					</NavLink>
				</li>
			</ul>
			<div className={styles.Navbar_mobileMenu}>
				<MenuIcon openMenu={openMenu} />
			</div>
			<ul className={styles.Navbar_bottomRow}>
				<li className={styles.Navbar_bottomRow_toggle}>
					<SocialBar>
						<ThemeToggle />
					</SocialBar>
				</li>
			</ul>
			{showMobileOverlay && <MobileOverlay closeMenu={closeMenu} />}
		</nav>
	);
};

export default Navbar;

Navbar.defaultProps = {};

Navbar.propTypes = {};
