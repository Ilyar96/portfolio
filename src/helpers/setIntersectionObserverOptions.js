export const setIntersectionObserverOptions = (...options) => {
	return {
		rootMargin: "0px",
		freezeOnceVisible: true,
		...options,
	};
};
