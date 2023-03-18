export const setDurationByIndex = (index) => {
	switch (index) {
		case 0:
			return "0.1s";
		case 1:
			return "0.2s";
		case 2:
			return "0.3s";
		case 3:
			return "0.4s";
		case 4:
			return "0.5s";
		case 5:
			return "0.6s";
		default:
			return "0";
	}
};
