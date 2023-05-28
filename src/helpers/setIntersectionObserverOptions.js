export const setIntersectionObserverOptions = (...options) => {
	return {
		rootMargin: "100px",
		freezeOnceVisible: true,
		threshold: 0.1,
		...options,
	};
};
