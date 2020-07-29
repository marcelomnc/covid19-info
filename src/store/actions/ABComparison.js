import * as actionTypes from "../actions/actionTypes";
import * as aBComparisonTypes from "../../components/ABComparison/Types";
import axios from "../../shared/Axios/Axios";
import * as Labels from "../../shared/ui/Labels";

const setFetchingABComparisonData = () => {
	return {
		type: actionTypes.SET_FETCHING_AB_COMPARISON_DATA,
	};
};

const setABComparisonData = (aBComparisonType, response) => {
	const builtData = buildDataFromResponse(aBComparisonType, response);

	let typeToReturn = null;
	switch (aBComparisonType) {
		case aBComparisonTypes.GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON:
			typeToReturn = actionTypes.SET_GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON_DATA;
			break;
		case aBComparisonTypes.COUNTRY_CUMULATIVE_VS_TODAY_COMPARISON:
			typeToReturn =
				actionTypes.SET_COUNTRY_CUMULATIVE_VS_TODAY_COMPARISON_DATA;
			break;
		case aBComparisonTypes.GLOBAL_VS_COUNTRY_CUMULATIVE_COMPARISON:
			typeToReturn =
				actionTypes.SET_GLOBAL_VS_COUNTRY_CUMULATIVE_COMPARISON_DATA;
			break;
		default:
			typeToReturn = actionTypes.SET_GLOBAL_VS_COUNTRY_TODAY_COMPARISON_DATA;
			break;
	}

	return {
		type: typeToReturn,
		entityAData: builtData.entityAData,
		entityBData: builtData.entityBData,
	};
};

const setErrorFetchingABComparisonData = (error) => {
	return {
		type: actionTypes.SET_ERROR_FETCHING_AB_COMPARISON_DATA,
		error: error,
	};
};

const buildDataFromResponse = (aBComparisonType, response) => {
	const [activeLabel, confirmedLabel, recoveredLabel, deathsLabel] = [
		Labels.activeLabel,
		Labels.confirmedLabel,
		Labels.recoveredLabel,
		Labels.deathsLabel,
	];

	let entityALabel,
		entityBLabel,
		entityAData,
		entityBData = null;

	let globalResponse = response.Global;
	let countryResponse = response.Countries;
	countryResponse = countryResponse.filter(
		(current) => current.CountryCode === "CO"
	);
	countryResponse = countryResponse[0];
	let totalActiveEntityA,
		totalActiveEntityB = 0;

	switch (aBComparisonType) {
		case aBComparisonTypes.GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON:
			entityALabel = Labels.globalCumulativeVsNewCasesEntityATitle;
			entityBLabel = Labels.globalCumulativeVsNewCasesEntityBTitle;
			totalActiveEntityA =
				globalResponse.TotalConfirmed -
				globalResponse.TotalRecovered -
				globalResponse.TotalDeaths;
			entityAData = {
				label: entityALabel,
				chart: {
					labels: [activeLabel, recoveredLabel, deathsLabel],
					datasets: [
						{
							data: [
								totalActiveEntityA,
								globalResponse.TotalRecovered,
								globalResponse.TotalDeaths,
							],
						},
					],
				},
				table: {
					labels: [activeLabel, recoveredLabel, deathsLabel, confirmedLabel],
					confirmed: globalResponse.TotalConfirmed,
					active: totalActiveEntityA,
					recovered: globalResponse.TotalRecovered,
					deaths: globalResponse.TotalDeaths,
				},
			};
			entityBData = {
				label: entityBLabel,
				chart: {
					labels: [""],
					datasets: [
						{
							data: [globalResponse.NewConfirmed],
						},
						{
							data: [globalResponse.NewRecovered],
						},
						{
							data: [globalResponse.NewDeaths],
						},
					],
				},
				table: {
					labels: [confirmedLabel, recoveredLabel, deathsLabel],
					confirmed: globalResponse.NewConfirmed,
					recovered: globalResponse.NewRecovered,
					deaths: globalResponse.NewDeaths,
				},
			};
			break;
		case aBComparisonTypes.COUNTRY_CUMULATIVE_VS_TODAY_COMPARISON:
			entityALabel = Labels.countryCumulativeVsNewCasesEntityATitle;
			entityBLabel = Labels.countryCumulativeVsNewCasesEntityBTitle;
			totalActiveEntityA =
				countryResponse.TotalConfirmed -
				countryResponse.TotalRecovered -
				countryResponse.TotalDeaths;
			entityAData = {
				label: entityALabel,
				chart: {
					labels: [activeLabel, recoveredLabel, deathsLabel],
					datasets: [
						{
							data: [
								totalActiveEntityA,
								countryResponse.TotalRecovered,
								countryResponse.TotalDeaths,
							],
						},
					],
				},
				table: {
					labels: [activeLabel, recoveredLabel, deathsLabel, confirmedLabel],
					confirmed: countryResponse.TotalConfirmed,
					active: totalActiveEntityA,
					recovered: countryResponse.TotalRecovered,
					deaths: countryResponse.TotalDeaths,
				},
			};
			entityBData = {
				label: entityBLabel,
				chart: {
					labels: [""],
					datasets: [
						{
							data: [countryResponse.NewConfirmed],
						},
						{
							data: [countryResponse.NewRecovered],
						},
						{
							data: [countryResponse.NewDeaths],
						},
					],
				},
				table: {
					labels: [confirmedLabel, recoveredLabel, deathsLabel],
					confirmed: countryResponse.NewConfirmed,
					recovered: countryResponse.NewRecovered,
					deaths: countryResponse.NewDeaths,
				},
			};
			break;
		case aBComparisonTypes.GLOBAL_VS_COUNTRY_CUMULATIVE_COMPARISON:
			entityALabel = Labels.globalVsCountryCumulativeEntityATitle;
			entityBLabel = Labels.globalVsCountryCumulativeEntityBTitle;
			totalActiveEntityA =
				globalResponse.TotalConfirmed -
				globalResponse.TotalRecovered -
				globalResponse.TotalDeaths;
			entityAData = {
				label: entityALabel,
				chart: {
					labels: [activeLabel, recoveredLabel, deathsLabel],
					datasets: [
						{
							data: [
								totalActiveEntityA,
								globalResponse.TotalRecovered,
								globalResponse.TotalDeaths,
							],
						},
					],
				},
				table: {
					labels: [activeLabel, recoveredLabel, deathsLabel, confirmedLabel],
					confirmed: globalResponse.TotalConfirmed,
					active: totalActiveEntityA,
					recovered: globalResponse.TotalRecovered,
					deaths: globalResponse.TotalDeaths,
				},
			};

			totalActiveEntityB =
				countryResponse.TotalConfirmed -
				countryResponse.TotalRecovered -
				countryResponse.TotalDeaths;
			entityBData = {
				label: entityBLabel,
				chart: {
					labels: [activeLabel, recoveredLabel, deathsLabel],
					datasets: [
						{
							data: [
								totalActiveEntityB,
								countryResponse.TotalRecovered,
								countryResponse.TotalDeaths,
							],
						},
					],
				},
				table: {
					labels: [activeLabel, recoveredLabel, deathsLabel, confirmedLabel],
					confirmed: countryResponse.TotalConfirmed,
					active: totalActiveEntityB,
					recovered: countryResponse.TotalRecovered,
					deaths: countryResponse.TotalDeaths,
				},
			};
			break;
		default:
			entityALabel = Labels.globalVsCountryNewCasesEntityATitle;
			entityBLabel = Labels.globalVsCountryNewCasesEntityBTitle;
			entityAData = {
				label: entityALabel,
				chart: {
					labels: [""],
					datasets: [
						{
							data: [globalResponse.NewConfirmed],
						},
						{
							data: [globalResponse.NewRecovered],
						},
						{
							data: [globalResponse.NewDeaths],
						},
					],
				},
				table: {
					labels: [confirmedLabel, recoveredLabel, deathsLabel],
					confirmed: globalResponse.NewConfirmed,
					recovered: globalResponse.NewRecovered,
					deaths: globalResponse.NewDeaths,
				},
			};
			entityBData = {
				label: entityBLabel,
				chart: {
					labels: [""],
					datasets: [
						{
							data: [countryResponse.NewConfirmed],
						},
						{
							data: [countryResponse.NewRecovered],
						},
						{
							data: [countryResponse.NewDeaths],
						},
					],
				},
				table: {
					labels: [confirmedLabel, recoveredLabel, deathsLabel],
					confirmed: countryResponse.NewConfirmed,
					recovered: countryResponse.NewRecovered,
					deaths: countryResponse.NewDeaths,
				},
			};
			break;
	}

	return {
		entityAData,
		entityBData,
	};
};

export const fetchABComparisonData = (aBComparisonType) => {
	return (dispatch) => {
		dispatch(setFetchingABComparisonData());
		axios
			.get("/summary")
			.then((response) => {
				dispatch(setABComparisonData(aBComparisonType, response.data));
			})
			.catch((error) => {
				dispatch(setErrorFetchingABComparisonData(error));
			});
	};
};
