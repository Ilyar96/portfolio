export const setIntersectionObserverOptions = (...options) => {
	return {
		rootMargin: "-100px",
		freezeOnceVisible: true,
		...options,
	};
};
