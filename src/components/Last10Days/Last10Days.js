import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import axios from "../../shared/Axios/Axios";
import withAjaxRequest from "../../hoc/withAjaxRequest/withAjaxRequest";
import Chart from "./Chart/Chart";
import Table from "./Table/Table";

const Last10Days = (props) => {
	useEffect(() => {
		props.fetchData();
	}, []);

	let content = null;
	if (props.isDataReady) {
		const label = "Totales - Colombia últimos 10 días";

		content = (
			<div className="Last10Days">
				<Chart data={props.data.chart} height={200} />
				<Table data={props.data.table} label={label} />
			</div>
		);
	}

	return content;
};

const mapStateToProps = (state) => {
	return {
		isDataReady: state.last10DaysReducer.isDataReady,
		data: state.last10DaysReducer.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => {
			dispatch(actionCreators.fetchLast10DaysData());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withAjaxRequest(Last10Days, axios));
