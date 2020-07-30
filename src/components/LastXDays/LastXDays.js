import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import axios from "../../shared/Axios/Axios";
import withAjaxRequest from "../../hoc/withAjaxRequest/withAjaxRequest";
import BarChart from "../Charts/Bar/Bar";
import Table from "./Table/Table";
import * as Labels from "../../shared/ui/Labels";
import * as Icons from "../../shared/ui/Icons";

const LastXDays = (props) => {
	useEffect(() => {
		props.fetchData(props.totalDays, props.isCumulative);
	}, [props.totalDays, props.isCumulative]);

	let content = null;
	if (props.isDataReady) {
		const title = props.isCumulative
			? Labels.cumulativeLabel
			: Labels.newCasesLabel;
		//TODO: Externalizar
		const label = `Colombia últimos ${props.totalDays} días - ${title}`;
		const icon = Icons.getIcon(Icons.types.flagCO);

		content = (
			<div className="LastXDays">
				<div className="Entity">
					<div className="Entity__title">
						<img src={icon} alt="Icon" />
						<span>{label}</span>
					</div>
					<BarChart data={props.data.chart} isCumulative={props.isCumulative} />
					<Table
						label={label}
						data={props.data.table}
						isCumulative={props.isCumulative}
					/>
				</div>
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
		fetchData: (totalDays, isCumulative) => {
			dispatch(actionCreators.fetchLastXDaysData(totalDays, isCumulative));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withAjaxRequest(LastXDays, axios));
