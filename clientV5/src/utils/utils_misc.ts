import { currentEnv } from "./utils_env";

// API UTILS

const TOKEN = "DUMMY-TOKEN";

const genericGet = async (token = TOKEN) => {
	const url = currentEnv.base + "/CheckAuth";
	try {
		const request = await fetch(url, {
			method: "GET",
			headers: {
				Authorization:
					"Basic " + btoa(currentEnv.user + ":" + currentEnv.password),
				SecurityToken: TOKEN,
				"Content-Type": "application/json",
			},
		});
		const response = await request.json();
		return response;
	} catch (error) {
		console.log("error", error);
		return error;
	}
};

// FUNCTIONAL UTILS
type TCallback = (arg: unknown) => void;
type TCallbacks = TCallback[];

const compose = (...fns: TCallbacks[]) => {
	return (initialVal: unknown) => {
		return fns.reduceRight((acc, fn) => {
			return fn(acc) as TCallback;
		}, initialVal);
	};
};
const pipe = (...fns: TCallbacks[]) => {
	return (initialVal: unknown) => {
		return fns.reduce((acc, fn) => {
			return fn(acc);
		}, initialVal);
	};
};

const asyncPipe = (...fns) => {
	return (initialVal: unknown) => {
		return fns.reduce((acc, fn) => {
			return acc.then(fn);
		}, Promise.resolve(initialVal));
	};
};

const groupByReduce = (key, list) => {
	const results = list.reduce((acc, item) => {
		const mapKey = item[key];
		if (!acc[mapKey]) {
			acc[mapKey] = [];
		}
		acc[mapKey].push(item);
		return acc;
	}, {});
	return results;
};

const groupByLoop = (key, list) => {
	const map = {};
	for (let i = 0; i < list.length; i++) {
		const currentItem = list[i];
		const mapKey = currentItem[key];
		if (!map[mapKey]) {
			map[mapKey] = [];
		}
		map[mapKey].push(currentItem);
	}
	return map;
};

export { genericGet };

export { compose, pipe, asyncPipe, groupByReduce, groupByLoop };
