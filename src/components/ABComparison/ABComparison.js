import React, { useEffect } from "react";
import { connect } from "react-redux";
import Chart from "./Chart/Chart";
import Table from "./Table/Table";
import * as actionCreators from "../../store/actions/index";
import axios from "../../shared/Axios/Axios";
import withAjaxRequest from "../../hoc/withAjaxRequest/withAjaxRequest";

const ABComparison = (props) => {
	useEffect(() => {
		props.fetchABComparisonData(props.aBComparisonType);
	}, [props.aBComparisonType]);

	let content = null;
	if (props.isDataReady) {
		content = (
			<div className="ABComparison">
				<Chart label={props.entityAData.label} data={props.entityAData.data} />
				<Table label={props.entityAData.label} data={props.entityAData.data} />
				<Chart label={props.entityBData.label} data={props.entityBData.data} />
				<Table label={props.entityBData.label} data={props.entityBData.data} />
			</div>
		);
	}

	return content;
};

const mapStateToProps = (state) => {
	return {
		isDataReady: state.aBComparisonReducer.isDataReady,
		entityAData: state.aBComparisonReducer.entityAData,
		entityBData: state.aBComparisonReducer.entityBData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchABComparisonData: (aBComparisonType) => {
			dispatch(actionCreators.fetchABComparisonData(aBComparisonType));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withAjaxRequest(ABComparison, axios));
