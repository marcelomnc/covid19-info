import React from "react";

const Table = (props) => {
	return (
		<div className="ABComparisonTable">
			<table>
				<thead>
					<tr>
						<th colSpan="2">
							<h5>{props.label}</h5>
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
