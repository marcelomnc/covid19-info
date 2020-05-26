export const formatNumber = (number) => number.toLocaleString();

export const formatDate = (strDate) => {
	const date = new Date(strDate);
	return date.toISOString().slice(0, 10);
};

export const formatPercentage = (number) => {
	const formattedNumber = formatNumber(number.toFixed(2));
	return `${formattedNumber}%`;
};
