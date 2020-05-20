import React from "react";
import * as formatter from "../../../shared/Formatter/Formatter";

const Table = (props) => {
	return (
		<div className="AppTable ABComparison__table">
			<table>
				<thead>
					<tr>
						<th colSpan="2">
							<h2>{props.label}</h2>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.data.confirmed.label}</td>
						<td>{formatter.formatNumber(props.data.confirmed.value)}</td>
					</tr>
					<tr>
						<td>{props.data.recovered.label}</td>
						<td>{formatter.formatNumber(props.data.recovered.value)}</td>
					</tr>
					<tr>
						<td>{props.data.deaths.label}</td>
						<td>{formatter.formatNumber(props.data.deaths.value)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
