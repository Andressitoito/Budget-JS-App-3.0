export const setNumberColor = (num, positive) => {
	if (positive === '+') {
		if (num === 0) {
			return `txt-msk-400`;
		} else if (num > 0) {
			return `text-red-800`;
		} else if (num < 0) {
			return `text-green-600`;
		}
	} else {
		if (num === 0) {
			return `txt-msk-400`;
		} else if (num < 0) {
			return `text-red-800`;
		} else if (num > 0) {
			return `text-green-600`;
		}
	}
};
