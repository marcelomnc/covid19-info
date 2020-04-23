import * as actionTypes from "../actions/actionTypes";

const initialState = {
	errorFetchingData: null,
	isDataReady: false,
	data: null,
};

const reducer = (currentState = initialState, action) => {
	const state = {
		...currentState,
	};

	switch (action.type) {
		case actionTypes.SET_FETCHING_LAST_10_DAYS_DATA:
			state.errorFetchingData = null;
			state.isDataReady = false;
			state.data = null;
			break;
		case actionTypes.SET_ERROR_FETCHING_LAST_10_DAYS_DATA:
			state.errorFetchingData = action.error;
			state.isDataReady = false;
			state.data = null;
			break;
		case actionTypes.SET_LAST_10_DAYS_DATA:
			state.errorFetchingData = null;
			state.isDataReady = true;
			state.data = action.data;
			break;
		default:
			break;
	}

	return state;
};

export default reducer;
