const createFakeRecord = (idx) => {
	return {
		id: `${idx}${crypto.randomUUID()}`,
		name: "Esten",
		age: 30,
	};
};

const generateFakeData = (count = 10) => {
	const data = [];
	for (let i = 0; i < count; i++) {
		data.push(createFakeRecord(i));
	}
	return data;
};

// FUNCTIONAL UTILS
type callback = (arg: unknown) => void;
type composedCbs = callback[];

const compose = (...fns: composedCbs[]) => {
	return (initialVal: unknown) => {
		return fns.reduceRight((acc, fn) => {
			return fn(acc) as callback;
		}, initialVal);
	};
};
const pipe = (...fns: composedCbs[]) => {
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

export { generateFakeData };

export { compose, pipe, asyncPipe, groupByReduce, groupByLoop };
