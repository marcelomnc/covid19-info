import * as actionTypes from "../actions/actionTypes";
import * as aBComparisonTypes from "../../components/ABComparison/Types";
import axios from "../../shared/Axios/Axios";

const setFetchingABComparisonData = () => {
	return {
		type: actionTypes.SET_FETCHING_AB_COMPARISON_DATA,
	};
};

const setABComparisonData = (aBComparisonType, response) => {
	const builtData = buildDataFromResponse(aBComparisonType, response);

	let typeToReturn = null;
	switch (aBComparisonType) {
		case aBComparisonTypes.GLOBAL_CUMMULATIVE_VS_TODAY_COMPARISON:
			typeToReturn =
				actionTypes.SET_GLOBAL_CUMMULATIVE_VS_TODAY_COMPARISON_DATA;
			break;
		case aBComparisonTypes.COUNTRY_CUMMULATIVE_VS_TODAY_COMPARISON:
			typeToReturn =
				actionTypes.SET_COUNTRY_CUMMULATIVE_VS_TODAY_COMPARISON_DATA;
			break;
		case aBComparisonTypes.GLOBAL_VS_COUNTRY_CUMMULATIVE_COMPARISON:
			typeToReturn =
				actionTypes.SET_GLOBAL_VS_COUNTRY_CUMMULATIVE_COMPARISON_DATA;
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
	const confirmedLabel = "Confirmados";
	const recoveredLabel = "Recuperados";
	const deathsLabel = "Muertos";

	let [entityALabel, entityBLabel, entityAData, entityBData] = [
		null,
		null,
		null,
		null,
	];
	let globalResponse = response.Global;
	let countryResponse = response.Countries;
	countryResponse = countryResponse.filter(
		(current) => current.CountryCode === "CO"
	);
	countryResponse = countryResponse[0];

	switch (aBComparisonType) {
		case aBComparisonTypes.GLOBAL_CUMMULATIVE_VS_TODAY_COMPARISON:
			entityALabel = "Acumulado - Global";
			entityBLabel = "Nuevos Casos - Global";
			entityAData = {
				confirmed: globalResponse.TotalConfirmed,
				recovered: globalResponse.TotalRecovered,
				deaths: globalResponse.TotalDeaths,
			};
			entityBData = {
				confirmed: globalResponse.NewConfirmed,
				recovered: globalResponse.NewRecovered,
				deaths: globalResponse.NewDeaths,
			};
			break;
		case aBComparisonTypes.COUNTRY_CUMMULATIVE_VS_TODAY_COMPARISON:
			entityALabel = "Acumulado - Colombia";
			entityBLabel = "Nuevos Casos - Colombia";
			entityAData = {
				confirmed: countryResponse.TotalConfirmed,
				recovered: countryResponse.TotalRecovered,
				deaths: countryResponse.TotalDeaths,
			};
			entityBData = {
				confirmed: countryResponse.NewConfirmed,
				recovered: countryResponse.NewRecovered,
				deaths: countryResponse.NewDeaths,
			};
			break;
		case aBComparisonTypes.GLOBAL_VS_COUNTRY_CUMMULATIVE_COMPARISON:
			entityALabel = "Acumulado - Global";
			entityBLabel = "Acumulado - Colombia";
			entityAData = {
				confirmed: globalResponse.TotalConfirmed,
				recovered: globalResponse.TotalRecovered,
				deaths: globalResponse.TotalDeaths,
			};
			entityBData = {
				confirmed: countryResponse.TotalConfirmed,
				recovered: countryResponse.TotalRecovered,
				deaths: countryResponse.TotalDeaths,
			};
			break;
		default:
			entityALabel = "Nuevos Casos - Global";
			entityBLabel = "Nuevos Casos - Colombia";
			entityAData = {
				confirmed: globalResponse.NewConfirmed,
				recovered: globalResponse.NewRecovered,
				deaths: globalResponse.NewDeaths,
			};
			entityBData = {
				confirmed: countryResponse.NewConfirmed,
				recovered: countryResponse.NewRecovered,
				deaths: countryResponse.NewDeaths,
			};
			break;
	}

	return {
		entityAData: {
			label: entityALabel,
			data: {
				confirmed: {
					label: confirmedLabel,
					value: entityAData.confirmed,
				},
				recovered: {
					label: recoveredLabel,
					value: entityAData.recovered,
				},
				deaths: {
					label: deathsLabel,
					value: entityAData.deaths,
				},
			},
		},
		entityBData: {
			label: entityBLabel,
			data: {
				confirmed: {
					label: confirmedLabel,
					value: entityBData.confirmed,
				},
				recovered: {
					label: recoveredLabel,
					value: entityBData.recovered,
				},
				deaths: {
					label: deathsLabel,
					value: entityBData.deaths,
				},
			},
		},
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
