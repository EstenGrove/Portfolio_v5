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

const asyncPipe = (...fns: TCallbacks[]) => {
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

export interface Grouped<T> {
	[index: string]: T[];
}

// const groupByLoop = <T extends object>(
const groupByLoop = <T extends Record<PropertyKey, object>>(
	key: keyof T,
	list: T[]
	// list: Record<string, T[]>
): Grouped<T> => {
	const map = {};
	for (let i = 0; i < list.length; i++) {
		const currentItem = list[i];
		const mapKey = currentItem[key];
		if (!map[mapKey as keyof object]) {
			map[mapKey as keyof object] = [];
		}
		map[mapKey].push(currentItem);
	}
	return map as Grouped<T>;
};

type GroupByReturn<T> = Record<string, T[]>;

const groupByLoop2 = <T extends object>(
	key: string,
	list: T[]
): GroupByReturn<T> => {
	const map = {};
	for (let i = 0; i < list.length; i++) {
		const currentItem = list[i];
		const mapKey = currentItem[key as keyof object];
		if (!map[mapKey as keyof object]) {
			map[mapKey as keyof T] = [];
		}
		map[mapKey].push(currentItem);
	}
	return map;
};

export { genericGet };

export { compose, pipe, asyncPipe, groupByReduce, groupByLoop };
