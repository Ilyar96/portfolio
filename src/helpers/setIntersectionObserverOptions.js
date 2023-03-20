export const setIntersectionObserverOptions = (...options) => {
	return {
		// rootMargin: "-50px",
		freezeOnceVisible: true,
		...options,
	};
};
