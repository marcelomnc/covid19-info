import React from "react";
import Chart from "../Chart/Chart";
import ChartTable from "../ChartTable/ChartTable";
import PropTypes from "prop-types";

const ABComparison = (props) => {
	return (
		<div className="ABComparison">
			<Chart label={props.entityAData.label} data={props.entityAData.chart} />
			<ChartTable label={props.entityAData.label} data={props.entityAData.table} />
			<Chart label={props.entityBData.label} data={props.entityBData.chart} />
			<ChartTable label={props.entityBData.label} data={props.entityBData.table} />
		</div>
	);
};

ABComparison.propTypes = {};

export default ABComparison;
