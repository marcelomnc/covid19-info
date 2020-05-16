import * as actionTypes from "./actionTypes";
import axios from "../../shared/Axios/Axios";

const setFetchingLastXDaysData = () => {
	return {
		type: actionTypes.SET_FETCHING_LAST_X_DAYS_DATA,
	};
};

const setLastXDaysData = (
	totalDays,
	respConfirmed,
	respRecovered,
	respDeaths
) => {
	const data = buildDataFromResponse(
		totalDays,
		respConfirmed,
		respRecovered,
		respDeaths
	);
	return {
		type: actionTypes.SET_LAST_X_DAYS_DATA,
		data: data,
	};
};

const setErrorFetchingLastXDaysData = (totalDays, error) => {
	return {
		type: actionTypes.SET_ERROR_FETCHING_LAST_X_DAYS_DATA,
		totalDays: totalDays,
		error: error,
	};
};

const buildDataFromResponse = (
	totalDays,
	respConfirmed,
	respRecovered,
	respDeaths
) => {
	const confirmedLabel = "Confirmados";
	const recoveredLabel = "Recuperados";
	const deathsLabel = "Muertos";

	const borderColor = "rgba(255, 255, 255, 0.5)";
	const borderWidth = 1;
	const backgroundColors = [
		"rgb(18,159,194)",
		"rgb(16,194,37)",
		"rgb(231,70,49)",
	];
	const hoverBackgroundColors = [
		"rgba(18,159,194,0.4)",
		"rgba(16,194,37, 0.4)",
		"rgba(231,70,49, 0.4)",
	];

	const chartData = {
		labels: [],
		datasets: [
			{
				label: confirmedLabel,
				borderColor: borderColor,
				borderWidth: borderWidth,
				backgroundColor: backgroundColors[0],
				hoverBackgroundColor: hoverBackgroundColors[0],
				hoverBorderColor: hoverBackgroundColors[0],
				data: [],
			},
			{
				label: recoveredLabel,
				borderColor: borderColor,
				borderWidth: borderWidth,
				backgroundColor: backgroundColors[1],
				hoverBackgroundColor: hoverBackgroundColors[1],
				hoverBorderColor: hoverBackgroundColors[1],
				data: [],
			},
			{
				label: deathsLabel,
				borderColor: borderColor,
				borderWidth: borderWidth,
				backgroundColor: backgroundColors[2],
				hoverBackgroundColor: hoverBackgroundColors[2],
				hoverBorderColor: hoverBackgroundColors[2],
				data: [],
			},
		],
	};

	const tableData = {
		label: "Fecha",
		labels: chartData.labels,
		confirmed: {
			label: confirmedLabel,
			data: [],
		},
		recovered: {
			label: recoveredLabel,
			data: [],
		},
		deaths: {
			label: deathsLabel,
			data: [],
		},
	};

	for (
		let i = respConfirmed.length - totalDays;
		i <= respConfirmed.length - 1;
		i++
	) {
		const date = new Date(respConfirmed[i].Date);
		const formatted = date.toISOString().slice(0, 10);
		chartData.labels.push(formatted);
		chartData.datasets[0].data.push(respConfirmed[i].Cases);
		chartData.datasets[1].data.push(respRecovered[i].Cases);
		chartData.datasets[2].data.push(respDeaths[i].Cases);
		tableData.confirmed.data.push(respConfirmed[i].Cases);
		tableData.recovered.data.push(respRecovered[i].Cases);
		tableData.deaths.data.push(respDeaths[i].Cases);
	}

	const optionData = {
		chart: chartData,
		table: tableData,
	};

	return optionData;
};

export const fetchLastXDaysData = (totalDays) => {
	return (dispatch) => {
		dispatch(setFetchingLastXDaysData());
		const req1 = axios.get("/country/colombia/status/confirmed");
		const req2 = axios.get("/country/colombia/status/recovered");
		const req3 = axios.get("/country/colombia/status/deaths");

		Promise.all([req1, req2, req3])
			.then((responses) => {
				const resp1 = responses[0].data;
				const resp2 = responses[1].data;
				const resp3 = responses[2].data;
				dispatch(setLastXDaysData(totalDays, resp1, resp2, resp3));
			})
			.catch((error) => {
				dispatch(setErrorFetchingLastXDaysData(totalDays, error));
			});
	};
};
