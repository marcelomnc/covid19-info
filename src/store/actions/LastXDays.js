import * as actionTypes from "./actionTypes";
import axios from "../../shared/Axios/Axios";
import * as formatter from "../../shared/Formatter/Formatter";
import * as Labels from "../../shared/ui/Labels";

const setFetchingLastXDaysData = () => {
	return {
		type: actionTypes.SET_FETCHING_LAST_X_DAYS_DATA,
	};
};

const setLastXDaysData = (
	totalDays,
	isCumulative,
	respConfirmed,
	respRecovered,
	respDeaths
) => {
	const data = buildDataFromResponse(
		totalDays,
		isCumulative,
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
	isCumulative,
	respConfirmed,
	respRecovered,
	respDeaths
) => {
	const [activeLabel, confirmedLabel, recoveredLabel, deathsLabel] = [
		Labels.activeLabel,
		Labels.confirmedLabel,
		Labels.recoveredLabel,
		Labels.deathsLabel,
	];

	const chartData = {
		labels: [],
		datasets: [
			{
				data: [],
			},
			{
				data: [],
			},
			{
				data: [],
			},
		],
	};

	const tableData = {
		labels: chartData.labels,
		dateLabel: Labels.dateLabel,
		confirmed: {
			label: confirmedLabel,
			data: [],
		},
		active: {
			label: activeLabel,
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
		chartData.labels.push(formatter.formatDate(respConfirmed[i].Date));

		if (isCumulative) {
			const totalActive =
				respConfirmed[i].Cases - respRecovered[i].Cases - respDeaths[i].Cases;
			chartData.datasets[0].data.push(totalActive);
			chartData.datasets[1].data.push(respRecovered[i].Cases);
			chartData.datasets[2].data.push(respDeaths[i].Cases);
			tableData.confirmed.data.push(respConfirmed[i].Cases);
			tableData.active.data.push(totalActive);
			tableData.recovered.data.push(respRecovered[i].Cases);
			tableData.deaths.data.push(respDeaths[i].Cases);
		} else {
			//New cases must be calculated since the API does not provide these stats
			const newConfirmed = respConfirmed[i].Cases - respConfirmed[i - 1].Cases;
			const newRecovered = respRecovered[i].Cases - respRecovered[i - 1].Cases;
			const newDeaths = respDeaths[i].Cases - respDeaths[i - 1].Cases;
			chartData.datasets[0].data.push(newConfirmed);
			chartData.datasets[1].data.push(newRecovered);
			chartData.datasets[2].data.push(newDeaths);
			tableData.confirmed.data.push(newConfirmed);
			tableData.recovered.data.push(newRecovered);
			tableData.deaths.data.push(newDeaths);
		}
	}

	const optionData = {
		chart: chartData,
		table: tableData,
	};

	return optionData;
};

export const fetchLastXDaysData = (totalDays, isCumulative) => {
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
				dispatch(
					setLastXDaysData(totalDays, isCumulative, resp1, resp2, resp3)
				);
			})
			.catch((error) => {
				dispatch(setErrorFetchingLastXDaysData(totalDays, error));
			});
	};
};
