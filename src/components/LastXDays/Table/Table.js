import React from "react";
import * as formatter from "../../../shared/Formatter/Formatter";

const Table = (props) => {
	return (
		<div className="AppTable LastXDays__table">
			<table>
				<thead>
					<tr>
						<th colSpan="4">
							<h2>{props.label}</h2>
						</th>
					</tr>
					<tr>
						<th>
							<h3>{props.data.label}</h3>
						</th>
						<th>
							<h3>{props.data.confirmed.label}</h3>
						</th>
						<th>
							<h3>{props.data.recovered.label}</h3>
						</th>
						<th>
							<h3>{props.data.deaths.label}</h3>
						</th>
					</tr>
				</thead>
				<tbody>
					{props.data.labels.map((current, index) => {
						return (
							<tr key={index}>
								<td>{current}</td>
								<td>
									{formatter.formatNumber(props.data.confirmed.data[index])}
								</td>
								<td>
									{formatter.formatNumber(props.data.recovered.data[index])}
								</td>
								<td>{formatter.formatNumber(props.data.deaths.data[index])}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
