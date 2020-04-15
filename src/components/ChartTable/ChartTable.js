import React from "react";
import PropTypes from "prop-types";

const ChartTable = (props) => {
	console.log("PROPS", props);

	return (
		<div className="ChartTable">
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
						<td>Confirmados</td>
						<td>{props.data.confirmed.toLocaleString()}</td>
					</tr>
					<tr>
						<td>Recuperados</td>
						<td>{props.data.recovered.toLocaleString()}</td>
					</tr>
					<tr>
						<td>Muertos</td>
						<td>{props.data.deaths.toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

ChartTable.propTypes = {};

export default ChartTable;
