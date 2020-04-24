import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = (props) => {
	const legendOpts = {
		display: true,
		position: "bottom",
		fullWidth: false,
		reverse: false,
		labels: {
			fontColor: "rgb(34, 41, 83)",
		},
	};

	const borderColor = "rgba(255, 255, 255, 0.5)";
	const backgroundColors = [
		"rgb(18, 159, 194)",
		"rgb(16, 194, 37)",
		"rgb(231, 70, 49)",
	];
	const hoverBackgroundColors = [
		"rgba(18, 159, 194, 0.4)",
		"rgba(16, 194, 37, 0.2)",
		"rgba(231, 70, 49, 0.4)",
	];

	const data = {
		labels: [
			props.data.confirmed.label,
			props.data.recovered.label,
			props.data.deaths.label,
		],
		datasets: [
			{
				data: [
					props.data.confirmed.value,
					props.data.recovered.value,
					props.data.deaths.value,
				],
				backgroundColor: backgroundColors,
				hoverBackgroundColor: hoverBackgroundColors,
				borderColor: borderColor,
				borderWidth: 1,
			},
		],
	};

	return (
		<div className="ABComparison__chart">
			<Pie data={data} legend={legendOpts} height={90} />
		</div>
	);
};

export default Chart;
