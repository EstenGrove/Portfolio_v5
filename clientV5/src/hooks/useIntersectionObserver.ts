import { useState, MutableRefObject, useEffect, RefObject } from "react";

type THookState = {
	isIntersecting: boolean;
	entry?: IntersectionObserverEntry | null;
};

type TEntryOptions =
	| {
			threshold?: number;
			root?: string;
			rootMargin?: string | number;
	  }
	| object;

type THookProps = {
	nodeRef: MutableRefObject<HTMLElement>;
	optionalCallback?: () => void | null;
	options?: TEntryOptions | undefined;
};

// const useIntersectionObserver = (
// 	nodeRef: MutableRefObject<HTMLElement>,
// 	optionalCallback?: () => void,
// 	options?: TEntryOptions = {}
// ): THookState => {
const useIntersectionObserver = (
	nodeRef: RefObject<HTMLElement>,
	optionalCallback: (() => void) | null = null,
	options: TEntryOptions = {}
): THookState => {
	const { threshold = 0, root = null, rootMargin = "0%" } = options ?? {};
	// entry state for target node
	const [entryState, setEntryState] = useState<THookState>({
		isIntersecting: false,
		entry: null,
	});

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) return;
		if (!nodeRef?.current) return;
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]): void => {
				const thresholds = Array.isArray(observer.thresholds)
					? observer.thresholds
					: [observer.thresholds];

				entries.forEach((entry) => {
					const isIntersecting =
						entry.isIntersecting &&
						thresholds.some(
							(threshold) => entry.intersectionRatio >= threshold
						);

					if (optionalCallback && typeof optionalCallback === "function") {
						setEntryState({ isIntersecting, entry });
						optionalCallback();
					} else {
						setEntryState({ isIntersecting, entry });
					}
				});
			},
			{ threshold, root, rootMargin }
		);

		// add observer to node
		observer.observe(nodeRef?.current);

		return () => {
			isMounted = false;
			observer.disconnect();
		};
	}, [nodeRef, optionalCallback, root, rootMargin, threshold]);

	return entryState;
};

export { useIntersectionObserver };
