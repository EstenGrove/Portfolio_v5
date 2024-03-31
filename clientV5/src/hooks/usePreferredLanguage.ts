import { useRef } from "react";

type TPreferLang = {
	preferredLanguage: string;
	setPreferredLanguage: (lang: string) => void;
};

const getLanguages = () => {
	const langs = window?.navigator?.languages;
	return langs;
};

const getPreferredLanguage = () => window?.navigator?.language;

const usePreferredLanguage = (override: string): TPreferLang => {
	const preferenceLang = useRef(!override ? getPreferredLanguage() : override);

	const setPreferredLanguage = (lang: string) => {
		preferenceLang.current = lang;
	};

	return {
		preferredLanguage: preferenceLang.current,
		setPreferredLanguage: setPreferredLanguage,
	};
};

export { getLanguages, getPreferredLanguage };

export { usePreferredLanguage };
