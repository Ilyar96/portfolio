export const setIntersectionObserverOptions = (...options) => {
	return {
		freezeOnceVisible: true,
		...options,
	};
};
