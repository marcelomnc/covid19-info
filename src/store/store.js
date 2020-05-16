import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import aBComparisonReducer from "./reducers/ABComparison";
import lastXDaysReducer from "./reducers/LastXDays";

const finalReducer = combineReducers({
	aBComparisonReducer: aBComparisonReducer,
	lastXDaysReducer: lastXDaysReducer,
});

const store = createStore(
	finalReducer,
	/* preloadedState, */ applyMiddleware(thunk)
);

export default store;
