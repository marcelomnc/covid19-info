import React from "react";
import { Bar } from "react-chartjs-2";
import * as formatter from "../../../shared/Formatter/Formatter";

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

	const options = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						callback: function (value, index, values) {
							return formatter.formatNumber(value);
						},
					},
				},
			],
		},
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					const label = data.datasets[tooltipItem.datasetIndex].label;
					const toFormat =
						data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
					return `${label}: ${formatter.formatNumber(toFormat)}`;
				},
			},
		},
	};

	return (
		<div className="LastXDays__chart">
			<Bar data={props.data} legend={legendOpts} options={options} {...props} />
		</div>
	);
};

export default Chart;
