import React from "react";

const Table = (props) => {
	return (
		<div className="ABComparison__table">
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
						<td>{props.data.confirmed.value.toLocaleString()}</td>
					</tr>
					<tr>
						<td>{props.data.recovered.label}</td>
						<td>{props.data.recovered.value.toLocaleString()}</td>
					</tr>
					<tr>
						<td>{props.data.deaths.label}</td>
						<td>{props.data.deaths.value.toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
