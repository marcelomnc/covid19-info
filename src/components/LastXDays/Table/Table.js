import React from "react";
import * as Formatter from "../../../shared/Formatter/Formatter";
import * as Calc from "../../../shared/Calc/Calc";
import * as Icons from "../../../shared/ui/Icons";

const Table = (props) => {
	let classes = "AppTable LastXDays__table";
	if (props.isCumulative) {
		classes += " cumulative";
	}

	let icon = props.isGlobal
		? Icons.getIcon(Icons.types.globe)
		: Icons.getIcon(Icons.types.flagCO);

	return (
		<div className={classes}>
			<table>
				<thead>
					<tr>
						<th colSpan={props.isCumulative ? 5 : 4}>
							<div className="EntityTitle">
								<img src={icon} alt="Icon" />
								<span>{props.label}</span>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{props.data.labels.map((current, index) => {
						const total = props.data.confirmed.data[index];
						return (
							<tr key={index}>
								<td>{current}</td>
								{props.isCumulative ? (
									<td>
										{Formatter.formatPercentage(
											Calc.calcPercentage(total, props.data.active.data[index])
										)}
										<br />
										{Formatter.formatNumber(props.data.active.data[index])}
									</td>
								) : (
									<td>
										{Formatter.formatNumber(props.data.confirmed.data[index])}
									</td>
								)}

								{props.isCumulative ? (
									<td>
										{Formatter.formatPercentage(
											Calc.calcPercentage(
												total,
												props.data.recovered.data[index]
											)
										)}
										<br />
										{Formatter.formatNumber(props.data.recovered.data[index])}
									</td>
								) : (
									<td>
										{Formatter.formatNumber(props.data.recovered.data[index])}
									</td>
								)}

								{props.isCumulative ? (
									<td>
										{Formatter.formatPercentage(
											Calc.calcPercentage(total, props.data.deaths.data[index])
										)}
										<br />
										{Formatter.formatNumber(props.data.deaths.data[index])}
									</td>
								) : (
									<td>
										{Formatter.formatNumber(props.data.deaths.data[index])}
									</td>
								)}

								{props.isCumulative ? (
									<td>
										{Formatter.formatPercentage(
											Calc.calcPercentage(
												total,
												props.data.confirmed.data[index]
											)
										)}
										<br />
										{Formatter.formatNumber(props.data.confirmed.data[index])}
									</td>
								) : null}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
