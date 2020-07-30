import * as actionTypes from "../actions/actionTypes";

const initialState = {
	errorFetchingData: null,
	isDataReady: false,
	entityAData: null,
	entityBData: null,
};

const setABComparisonData = (state, action) => {
	state.errorFetchingData = null;
	state.isDataReady = true;
	state.entityAData = action.entityAData;
	state.entityBData = action.entityBData;
};

const reducer = (currentState = initialState, action) => {
	const state = {
		...currentState,
	};

	switch (action.type) {
		case actionTypes.SET_FETCHING_AB_COMPARISON_DATA:
			state.errorFetchingData = null;
			state.isDataReady = false;
			state.entityAData = null;
			state.entityBData = null;
			break;
		case actionTypes.SET_ERROR_FETCHING_AB_COMPARISON_DATA:
			state.errorFetchingData = action.error;
			state.isDataReady = false;
			state.entityAData = null;
			state.entityBData = null;
			break;
		case actionTypes.SET_GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON_DATA:
			setABComparisonData(state, action);
			break;
		case actionTypes.SET_COUNTRY_CUMULATIVE_VS_TODAY_COMPARISON_DATA:
			setABComparisonData(state, action);
			break;
		case actionTypes.SET_GLOBAL_VS_COUNTRY_CUMULATIVE_COMPARISON_DATA:
			setABComparisonData(state, action);
			break;
		case actionTypes.SET_GLOBAL_VS_COUNTRY_TODAY_COMPARISON_DATA:
			setABComparisonData(state, action);
			break;
		default:
			break;
	}

	return state;
};

export default reducer;
