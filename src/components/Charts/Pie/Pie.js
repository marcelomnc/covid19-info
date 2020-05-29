import React from "react";
import { Pie } from "react-chartjs-2";
import * as Formatter from "../../../shared/Formatter/Formatter";
import * as Calc from "../../../shared/Calc/Calc";
import * as Colors from "../../../shared/ui/Colors";

const PieChart = (props) => {
	const legendOpts = {
		position: "bottom",
		labels: {
			fontColor: Colors.primaryColor,
			fontSize: 14,
			fontStyle: "bold",
		},
	};

	const borderColor = Colors.chartsBorderColor;
	const backgroundColors = [
		Colors.activeColor,
		Colors.recoveredColor,
		Colors.deathsColor,
	];
	const hoverBackgroundColors = [
		Colors.activeHoverColor,
		Colors.recoveredHoverColor,
		Colors.deathsHoverColor,
	];

	const data = { ...props.data, datasets: [...props.data.datasets] };

	data.datasets[0].backgroundColor = backgroundColors;
	data.datasets[0].hoverBackgroundColor = hoverBackgroundColors;
	data.datasets[0].borderColor = borderColor;
	data.datasets[0].borderWidth = 1;

	const totalConfirmed =
		data.datasets[0].data[0] +
		data.datasets[0].data[1] +
		data.datasets[0].data[2];

	const options = {
		maintainAspectRatio: false,
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					const label = data.labels[tooltipItem.index];
					const value =
						data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
					const percentage = Formatter.formatPercentage(
						Calc.calcPercentage(totalConfirmed, value)
					);
					return `${label}: (${percentage}) ${Formatter.formatNumber(value)}`;
				},
			},
		},
	};

	return (
		<div className="ABComparison__chart">
			<Pie data={data} legend={legendOpts} options={options} />
		</div>
	);
};

export default PieChart;
