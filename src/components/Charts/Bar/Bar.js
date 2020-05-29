import React from "react";
import { Bar } from "react-chartjs-2";
import * as Formatter from "../../../shared/Formatter/Formatter";
import * as Colors from "../../../shared/ui/Colors";
import * as Labels from "../../../shared/ui/Labels";
import * as Calc from "../../../shared/Calc/Calc";

const BarChart = (props) => {
	const [confirmedLabel, activeLabel, recoveredLabel, deathsLabel] = [
		Labels.confirmedLabel,
		Labels.activeLabel,
		Labels.recoveredLabel,
		Labels.deathsLabel,
	];

	const fontColor = Colors.primaryColor;

	const legendOpts = {
		position: "bottom",
		labels: {
			fontColor: fontColor,
			fontSize: 14,
			fontStyle: "bold",
		},
	};

	const borderColor = Colors.chartsBorderColor;
	const borderWidth = 1;
	const backgroundColors = [
		props.isCumulative ? Colors.activeColor : Colors.confirmedColor,
		Colors.recoveredColor,
		Colors.deathsColor,
	];
	const hoverBackgroundColors = [
		props.isCumulative ? Colors.activeHoverColor : Colors.confirmedHoverColor,
		Colors.recoveredHoverColor,
		Colors.deathsHoverColor,
	];

	const data = { ...props.data, datasets: [...props.data.datasets] };

	data.datasets[0].borderColor = borderColor;
	data.datasets[0].borderWidth = borderWidth;
	data.datasets[0].backgroundColor = backgroundColors[0];
	data.datasets[0].hoverBackgroundColor = hoverBackgroundColors[0];
	data.datasets[0].hoverBorderColor = hoverBackgroundColors[0];
	if (props.isCumulative) {
		//Active
		data.datasets[0].label = activeLabel;
	} else {
		//Confirmed
		data.datasets[0].label = confirmedLabel;
	}

	//Recovered
	data.datasets[1].label = recoveredLabel;
	data.datasets[1].borderColor = borderColor;
	data.datasets[1].borderWidth = borderWidth;
	data.datasets[1].backgroundColor = backgroundColors[1];
	data.datasets[1].hoverBackgroundColor = hoverBackgroundColors[1];
	data.datasets[1].hoverBorderColor = hoverBackgroundColors[1];

	//Deaths
	data.datasets[2].label = deathsLabel;
	data.datasets[2].borderColor = borderColor;
	data.datasets[2].borderWidth = borderWidth;
	data.datasets[2].backgroundColor = backgroundColors[2];
	data.datasets[2].hoverBackgroundColor = hoverBackgroundColors[2];
	data.datasets[2].hoverBorderColor = hoverBackgroundColors[2];

	const options = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						callback: function (value, index, values) {
							return Formatter.formatNumber(value);
						},
						fontColor: fontColor,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						fontColor: fontColor,
					},
				},
			],
		},
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					const label = data.datasets[tooltipItem.datasetIndex].label;
					let percentage = "";
					if (props.isCumulative) {
						const totalConfirmed =
							data.datasets[0].data[tooltipItem.index] +
							data.datasets[1].data[tooltipItem.index] +
							data.datasets[2].data[tooltipItem.index];
						percentage = `(${Formatter.formatPercentage(
							Calc.calcPercentage(
								totalConfirmed,
								data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
							)
						)}) `;
					}

					const toFormat =
						data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
					return `${label}: ${percentage}${Formatter.formatNumber(toFormat)}`;
				},
			},
		},
	};

	return (
		<div className={props.className}>
			<Bar data={data} legend={legendOpts} options={options} />
		</div>
	);
};

export default BarChart;
