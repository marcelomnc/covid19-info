import React from "react";
import { Bar } from "react-chartjs-2";

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

	return (
		<div className="LastXDays__chart">
			<Bar
				data={props.data}
				legend={legendOpts}
				options={{ maintainAspectRatio: false }}
				{...props}
			/>
		</div>
	);
};

export default Chart;
