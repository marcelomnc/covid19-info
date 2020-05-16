import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import axios from "../../shared/Axios/Axios";
import withAjaxRequest from "../../hoc/withAjaxRequest/withAjaxRequest";
import Chart from "./Chart/Chart";
import Table from "./Table/Table";

const LastXDays = (props) => {
	useEffect(() => {
		props.fetchData(props.totalDays);
	}, [props.totalDays]);

	let content = null;
	if (props.isDataReady) {
		const label = `Totales - Colombia últimos ${props.totalDays} días`;

		content = (
			<div className="LastXDays">
				<Chart data={props.data.chart} height={200} />
				<Table data={props.data.table} label={label} />
			</div>
		);
	}

	return content;
};

const mapStateToProps = (state) => {
	return {
		isDataReady: state.lastXDaysReducer.isDataReady,
		data: state.lastXDaysReducer.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (totalDays) => {
			dispatch(actionCreators.fetchLastXDaysData(totalDays));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withAjaxRequest(LastXDays, axios));
