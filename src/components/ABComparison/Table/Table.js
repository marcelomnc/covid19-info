import React from "react";
import * as Formatter from "../../../shared/Formatter/Formatter";
import * as Calc from "../../../shared/Calc/Calc";

const Table = (props) => {
	let classes = "Entity__table ABComparison__table";
	let total = 0;
	if (props.isCumulative) {
		classes += " cumulative";
		total = props.data.active + props.data.recovered + props.data.deaths;
	}

	return (
		<div className={classes}>
			<table>
				<tbody>
					{props.isCumulative ? (
						<tr>
							<td>{props.data.labels[0]}</td>
							<td>
								{Formatter.formatPercentage(
									Calc.calcPercentage(total, props.data.active)
								)}
								<br />
								{Formatter.formatNumber(props.data.active)}
							</td>
						</tr>
					) : (
						<tr>
							<td>{props.data.labels[0]}</td>
							<td>{Formatter.formatNumber(props.data.confirmed)}</td>
						</tr>
					)}

					{props.isCumulative ? (
						<tr>
							<td>{props.data.labels[1]}</td>
							<td>
								{Formatter.formatPercentage(
									Calc.calcPercentage(total, props.data.recovered)
								)}
								<br />
								{Formatter.formatNumber(props.data.recovered)}
							</td>
						</tr>
					) : (
						<tr>
							<td>{props.data.labels[1]}</td>
							<td>{Formatter.formatNumber(props.data.recovered)}</td>
						</tr>
					)}

					{props.isCumulative ? (
						<tr>
							<td>{props.data.labels[2]}</td>
							<td>
								{Formatter.formatPercentage(
									Calc.calcPercentage(total, props.data.deaths)
								)}
								<br />
								{Formatter.formatNumber(props.data.deaths)}
							</td>
						</tr>
					) : (
						<tr>
							<td>{props.data.labels[2]}</td>
							<td>{Formatter.formatNumber(props.data.deaths)}</td>
						</tr>
					)}

					{props.isCumulative ? (
						<tr>
							<td>{props.data.labels[3]}</td>
							<td>
								{Formatter.formatPercentage(
									Calc.calcPercentage(total, props.data.confirmed)
								)}
								<br />
								{Formatter.formatNumber(props.data.confirmed)}
							</td>
						</tr>
					) : null}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
