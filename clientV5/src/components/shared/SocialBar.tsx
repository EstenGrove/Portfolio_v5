import React from "react";
import styles from "../../css/shared/SocialBar.module.scss";
import sprite from "../../assets/icons/general.svg";

type Props = {};

const ICONS = {
	// github: "github-with-circle",
	github: "github1",
	linkedin: "linkedin-with-circle",
};

const socialConfig = {
	github: {
		icon: "github1",
		href: "https://github.com/EstenGrove",
	},
	linkedin: {
		icon: "linkedin",
		href: "https://linkedin.com/StevenG-",
	},
	resume: {
		href: "",
		icon: `file-text`,
	},
	email: {
		href: `mailto:sgoredev@gmail.com`,
		icon: `mark_email_read`,
	},
};

type TSocialProps = {
	icon: string;
	href: string;
};

const SocialIcon = ({ icon, href }: TSocialProps) => {
	return (
		<a href={href} className={styles.SocialIcon} target="_blank">
			<svg className={styles.SocialIcon_icon}>
				<use xlinkHref={`${sprite}#icon-${icon}`}></use>
			</svg>
		</a>
	);
};

const SocialBar = ({ children }: Props) => {
	return (
		<div className={styles.SocialBar}>
			{children}
			<SocialIcon
				icon={socialConfig.github.icon}
				href={socialConfig.github.href}
			/>
			<SocialIcon
				icon={socialConfig.email.icon}
				href={socialConfig.email.href}
			/>
			{/*  */}
		</div>
	);
};

export default SocialBar;

SocialBar.defaultProps = {};

SocialBar.propTypes = {};
