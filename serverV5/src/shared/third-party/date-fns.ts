import {
	addHours,
	format,
	formatDistanceToNow,
	isPast,
	parse,
	subHours,
} from "date-fns";

type TDateFormats = {
	long: string;
	short: string;
	longDashes: string;
	shortDashes: string;
};
type TTimeFormats = {
	short: string;
	long: string;
	alt: string;
};
type TDateTimeFormats = {
	long: string;
	short: string;
	longAndShort: string;
	shortAndLong: string;
	longDashes: string;
};

// DATE-ONLY FORMAT TOKENS
const DATE_FORMATS: TDateFormats = {
	long: "MM/dd/yyyy",
	short: "MM/dd/yy",
	// w/ dashes instead of slashes
	longDashes: "MM-dd-yyyy",
	shortDashes: "MM-dd-yy",
};
// TIME-ONLY FORMAT TOKENS
const TIME_FORMATS: TTimeFormats = {
	short: "h:mm",
	long: "hh:mm a",
	alt: "HH:mm",
};
// DATETIME FORMAT TOKENS (both date & time merged)
const DATETIME_TOKENS: TDateTimeFormats = {
	long: `${DATE_FORMATS.long} ${TIME_FORMATS.long}`,
	short: `${DATE_FORMATS.short} ${TIME_FORMATS.short}`,
	longAndShort: `${DATE_FORMATS.long} ${TIME_FORMATS.short}`,
	shortAndLong: `${DATE_FORMATS.short} ${TIME_FORMATS.long}`,
	longDashes: `${DATE_FORMATS.longDashes} ${TIME_FORMATS.long}`,
};

// formats a single date excludes time
const formatDate = (
	date: Date | string,
	formatToken: keyof TDateFormats = "long"
) => {
	const base: Date = new Date(date);
	const target = DATE_FORMATS[formatToken as keyof TDateFormats];
	const result = format(base, target);

	return result;
};
// formats a single time excludes date
const formatTime = (
	time: Date | string,
	formatToken: keyof TTimeFormats = "long"
) => {
	const base: Date = new Date(time);
	const target: string = TIME_FORMATS[formatToken as keyof TTimeFormats];
	const result = format(base, target);

	return result;
};
// formats both date & time
const formatDateTime = (
	datetime: Date | string,
	formatToken: keyof TDateTimeFormats = "long"
) => {
	const base: Date = new Date(datetime);
	const target: string = DATETIME_TOKENS[formatToken as keyof TDateTimeFormats];
	const result = format(base, target);

	return result;
};

// merges a time string (eg. '03:45 AM') into base date instance
const parseTimeString = (
	timeStr: string,
	baseDate: Date | string = new Date()
) => {
	const parsed = parse(timeStr, "hh:mm a", baseDate);
	return parsed;
};

// merges a time string (eg. '03:45 AM') into a date instance
const mergeTimeStrWithDate = (
	timeStr: string,
	targetDate: Date | string
): Date | string => {
	const result = parseTimeString(timeStr, targetDate);

	return result;
};

// get time from date to now in words (eg. 'about 3 days ago')
const getRelativeDistanceToNow = (date: Date | string): string => {
	const base = new Date(date);
	const inPast = isPast(base);
	const pastSuffix = ` ago`;
	const distance = formatDistanceToNow(base);
	if (inPast) {
		// removes 'about' approximation
		const clean = distance.replace(/about/g, "");
		return clean + pastSuffix;
	} else {
		return distance;
	}
};

// add 'X' hours to a date
const addHoursToDate = (date: Date | string, hours: number): Date => {
	const base = new Date(date);
	const withHrs = addHours(base, hours);

	return withHrs;
};
// subtract 'X' hours from a date
const subHoursFromDate = (date: Date | string, hours: number): Date => {
	const base = new Date(date);
	const withHrs = subHours(base, hours);

	return withHrs;
};

// conversions
const daysToHours = (days: number): number => {
	return days * 24;
};
const daysToMins = (days: number): number => {
	return days * 1440;
};
const daysToSecs = (days: number): number => {
	return days * 86400;
};

const hoursToMins = (hours: number): number => {
	return hours * 60;
};
const hoursToSecs = (hours: number): number => {
	return hours * 3600;
};
const minsToSecs = (mins: number): number => {
	return mins * 60;
};
const minsToMs = (mins: number): number => {
	return mins * 60000;
};

export {
	// formatting
	formatDate,
	formatTime,
	formatDateTime,
	// parsing
	parseTimeString,
	mergeTimeStrWithDate,
	// relative distance
	getRelativeDistanceToNow,
	// conversions
	addHoursToDate,
	subHoursFromDate,
	// time conversions
	daysToHours,
	daysToMins,
	daysToSecs,
	hoursToMins,
	hoursToSecs,
	minsToSecs,
	minsToMs,
};
