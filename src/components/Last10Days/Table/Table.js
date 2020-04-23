import React from "react";

const Table = (props) => {
	return (
		<div className="Last10DaysTable">
			<table>
				<thead>
					<tr>
						<th colSpan="4">{props.label}</th>
					</tr>
					<tr>
						<th>
							<h5>{props.data.label}</h5>
						</th>
						<th>
							<h5>{props.data.confirmed.label}</h5>
						</th>
						<th>
							<h5>{props.data.recovered.label}</h5>
						</th>
						<th>
							<h5>{props.data.deaths.label}</h5>
						</th>
					</tr>
				</thead>
				<tbody>
					{props.data.labels.map((current, index) => {
						return (
							<tr key={index}>
								<td>{current}</td>
								<td>{props.data.confirmed.data[index].toLocaleString()}</td>
								<td>{props.data.recovered.data[index].toLocaleString()}</td>
								<td>{props.data.deaths.data[index].toLocaleString()}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
