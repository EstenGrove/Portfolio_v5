import { memo, useMemo } from "react";
import { analytics, currentEnv, enableTinyPixel } from "../../utils/utils_env";

/**
 * <TinyPixel/>: this component is used for a very boorish & simple analytics system
 * - When the component mounts, it requests the 'src' value for the hidden image
 * - The request is sent to the backend & is handled by an analytics controller
 * - The controller immediately responds w/ a base64 image src
 * - Then the controller creates a db record w/ the header info & details about the request
 */

// Available page routes, that we want to track
type PageRoute =
	| "/"
	| "/about"
	| "/projects"
	| "/contact"
	| "/snippets"
	| `/projects/${number}`;

type Props = {
	pageRoute: PageRoute;
};

const getTimezone = () => {
	const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
	return tz;
};

const getTzOffset = () => {
	const minsOffset = new Date().getTimezoneOffset();
	const hoursOffset = minsOffset / 60;
	return hoursOffset;
};

const getLocale = () => {
	const locale = navigator?.language;
	if (!locale) {
		const lang = navigator?.languages?.[0] ?? "Not Recognized";
		return lang;
	} else {
		return locale;
	}
};

type TSrcOptions = {
	[key: string]: string | number;
};

const getSrc = (options: TSrcOptions) => {
	let url = currentEnv.base + analytics.logVisit;
	url += "?" + new URLSearchParams(options as Record<string, string>);

	return url;
};

const fetchSrc = async (pageRoute: string = "/") => {
	const srcUrl = getSrc({
		page: pageRoute,
		locale: getLocale(),
		tzOffset: getTzOffset(),
		tz: getTimezone(),
	});
	try {
		const request = await fetch(srcUrl, {
			method: "GET",
			headers: {
				Authorization: btoa(currentEnv.user + ":" + currentEnv.password),
			},
		});
		const response = await request.json();
		return response.body;
	} catch (error) {
		return error;
	}
};

const TinyPixelPure = ({ pageRoute = "/" }: Props) => {
	const src = useMemo(async () => {
		const imgSrc = await fetchSrc(pageRoute);
		return imgSrc;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!enableTinyPixel) {
		return null;
	}
	return (
		<>
			<img
				src={src as unknown as string}
				alt={`Tiny Pixel: ${pageRoute}`}
				width="0"
				height="0"
				style={{ display: "none" }}
			/>
		</>
	);
};

const TinyPixel = memo(TinyPixelPure);

export default TinyPixel;
