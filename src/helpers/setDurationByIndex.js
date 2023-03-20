export const setDurationByIndex = (index, step = 0.1) => {
	return `${(++index * step).toFixed(2)}s`;
};
