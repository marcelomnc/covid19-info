import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import aBComparisonReducer from "./reducers/ABComparison";
import last10DaysReducer from "./reducers/Last10Days";

const finalReducer = combineReducers({
	aBComparisonReducer: aBComparisonReducer,
	last10DaysReducer: last10DaysReducer,
});

const store = createStore(
	finalReducer,
	/* preloadedState, */ applyMiddleware(thunk)
);

export default store;
