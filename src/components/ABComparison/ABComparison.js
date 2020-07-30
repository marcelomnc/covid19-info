import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import axios from "../../shared/Axios/Axios";
import withAjaxRequest from "../../hoc/withAjaxRequest/withAjaxRequest";
import PieChart from "../Charts/Pie/Pie";
import BarChart from "../Charts/Bar/Bar";
import Table from "./Table/Table";
import * as ABComparisonTypes from "./Types";
import * as Icons from "../../shared/ui/Icons";

const ABComparison = (props) => {
	useEffect(() => {
		props.fetchABComparisonData(props.aBComparisonType);
	}, [props.aBComparisonType]);

	let content = null;
	let tmp = null;

	if (props.isDataReady) {
		const entityClassName = "Entity";
		const entityTitleClassName = "Entity__title";

		if (
			props.aBComparisonType ===
				ABComparisonTypes.GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON ||
			props.aBComparisonType ===
				ABComparisonTypes.COUNTRY_CUMULATIVE_VS_TODAY_COMPARISON
		) {
			let icon =
				props.aBComparisonType ===
				ABComparisonTypes.GLOBAL_CUMULATIVE_VS_TODAY_COMPARISON
					? Icons.getIcon(Icons.types.globe)
					: Icons.getIcon(Icons.types.flagCO);

			tmp = (
				<>
					<div className={entityClassName}>
						<div className={entityTitleClassName}>
							<img src={icon} alt="Icon" />
							<span>{props.entityAData.label}</span>
						</div>
						<PieChart
							label={props.entityAData.label}
							data={props.entityAData.chart}
						/>
						<Table
							label={props.entityAData.label}
							data={props.entityAData.table}
							isCumulative
						/>
					</div>
					<div className={entityClassName}>
						<div className={entityTitleClassName}>
							<img src={icon} alt="Icon" />
							<span>{props.entityBData.label}</span>
						</div>
						<BarChart
							label={props.entityBData.label}
							data={props.entityBData.chart}
						/>
						<Table
							label={props.entityBData.label}
							data={props.entityBData.table}
						/>
					</div>
				</>
			);
		} else if (
			props.aBComparisonType ===
			ABComparisonTypes.GLOBAL_VS_COUNTRY_CUMULATIVE_COMPARISON
		) {
			tmp = (
				<>
					<div className={entityClassName}>
						<div className={entityTitleClassName}>
							<img src={Icons.getIcon(Icons.types.globe)} alt="Icon" />
							<span>{props.entityAData.label}</span>
						</div>
						<PieChart
							label={props.entityAData.label}
							data={props.entityAData.chart}
						/>
						<Table
							label={props.entityAData.label}
							data={props.entityAData.table}
							isCumulative
						/>
					</div>
					<div className={entityClassName}>
						<div className={entityTitleClassName}>
							<img src={Icons.getIcon(Icons.types.flagCO)} alt="Icon" />
							<span>{props.entityBData.label}</span>
						</div>
						<PieChart
							label={props.entityBData.label}
							data={props.entityBData.chart}
						/>
						<Table
							label={props.entityBData.label}
							data={props.entityBData.table}
							isCumulative
						/>
					</div>
				</>
			);
		} else {
			//Global vs country - new cases
			tmp = (
				<>
					<div className={entityClassName}>
						<div className={entityTitleClassName}>
							<img src={Icons.getIcon(Icons.types.globe)} alt="Icon" />
							<span>{props.entityAData.label}</span>
						</div>
						<BarChart
							label={props.entityAData.label}
							data={props.entityAData.chart}
						/>
						<Table
							label={props.entityAData.label}
							data={props.entityAData.table}
						/>
					</div>
					<div className={entityClassName}>
						<div className={entityTitleClassName}>
							<img src={Icons.getIcon(Icons.types.flagCO)} alt="Icon" />
							<span>{props.entityBData.label}</span>
						</div>
						<BarChart
							label={props.entityBData.label}
							data={props.entityBData.chart}
						/>
						<Table
							label={props.entityBData.label}
							data={props.entityBData.table}
						/>
					</div>
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
