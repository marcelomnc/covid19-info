import React, { useEffect } from "react";
import { connect } from "react-redux";
import PieChart from "../Charts/Pie/Pie";
import BarChart from "../Charts/Bar/Bar";
import Table from "./Table/Table";
import * as actionCreators from "../../store/actions/index";
import axios from "../../shared/Axios/Axios";
import withAjaxRequest from "../../hoc/withAjaxRequest/withAjaxRequest";
import * as ABComparisonTypes from "./Types";

const ABComparison = (props) => {
	useEffect(() => {
		props.fetchABComparisonData(props.aBComparisonType);
	}, [props.aBComparisonType]);

	let content = null;
	let tmp = null;

	if (props.isDataReady) {
		const chartClassName = "ABComparison__chart";

		if (
			props.aBComparisonType ===
				ABComparisonTypes.GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON ||
			props.aBComparisonType ===
				ABComparisonTypes.COUNTRY_CUMULATIVE_VS_TODAY_COMPARISON
		) {
			tmp = (
				<>
					<PieChart
						label={props.entityAData.label}
						data={props.entityAData.chart}
					/>
					<Table
						label={props.entityAData.label}
						data={props.entityAData.table}
						isCumulative
					/>
					<BarChart
						label={props.entityBData.label}
						data={props.entityBData.chart}
						className={chartClassName}
					/>
					<Table
						label={props.entityBData.label}
						data={props.entityBData.table}
					/>
				</>
			);
		} else if (
			props.aBComparisonType ===
			ABComparisonTypes.GLOBAL_VS_COUNTRY_CUMULATIVE_COMPARISON
		) {
			tmp = (
				<>
					<PieChart
						label={props.entityAData.label}
						data={props.entityAData.chart}
					/>
					<Table
						label={props.entityAData.label}
						data={props.entityAData.table}
						isCumulative
					/>
					<PieChart
						label={props.entityBData.label}
						data={props.entityBData.chart}
					/>
					<Table
						label={props.entityBData.label}
						data={props.entityBData.table}
						isCumulative
					/>
				</>
			);
		} else {
			tmp = (
				<>
					<BarChart
						label={props.entityAData.label}
						data={props.entityAData.chart}
						className={chartClassName}
					/>
					<Table
						label={props.entityAData.label}
						data={props.entityAData.table}
					/>
					<BarChart
						label={props.entityBData.label}
						data={props.entityBData.chart}
						className={chartClassName}
					/>
					<Table
						label={props.entityBData.label}
						data={props.entityBData.table}
					/>
				</>
			);
		}
	}

	content = <div className="ABComparison">{tmp}</div>;

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
