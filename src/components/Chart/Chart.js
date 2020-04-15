import React from "react";
import { Chart } from "react-charts";
import PropTypes from "prop-types";

const MyChart = (props) => {
	const axes = [
		{ primary: true, type: "ordinal", position: "bottom" },
		{ position: "left", type: "linear", stacked: false },
	];

	console.log('PROPS', props.data);

	return (
		<div className="Chart">
			<Chart
				data={props.data}
				
				axes={axes}
				tooltip
			/>
		</div>
	);
};

MyChart.propTypes = {};

export default MyChart;
