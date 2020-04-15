import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../../../shared/Axios/Axios";
import withAjaxRequest from "../../../hoc/withAjaxRequest/withAjaxRequest";
import Chart from "../../Chart/Chart";

const MyCountry = (props) => {
	const [dataReady, setDataReady] = useState(false);
	const [data, setData] = useState(null);

	const buildData = (respConfirmed, respRecovered, respDeaths) => {
		const confirmedLabel = "Confirmados";
		const recoveredLabel = "Recuperados";
		const deathsLabel = "Muertos";

		const chartData = [
			{
				label: confirmedLabel,
				data: [],
			},
			{
				label: recoveredLabel,
				data: [],
			},
			{
				label: deathsLabel,
				data: [],
			},
		];

		for (let i = respConfirmed.length - 10; i < respConfirmed.length; i++) {
			const date = new Date(respConfirmed[i].Date);
			const formatted = date.toISOString().slice(0, 10);

			chartData[0].data.push({
				x: formatted,
				y: respConfirmed[i].Cases,
			});
			chartData[1].data.push({
				x: formatted,
				y: respRecovered[i].Cases,
			});
			chartData[2].data.push({
				x: formatted,
				y: respDeaths[i].Cases,
			});
		}

		setData(chartData);
		setDataReady(true);
	};

	useEffect(() => {
		const req1 = axios.get("/country/colombia/status/confirmed");
		const req2 = axios.get("/country/colombia/status/recovered");
		const req3 = axios.get("/country/colombia/status/deaths");

		Promise.all([req1, req2, req3]).then((responses) => {
			const resp1 = responses[0].data;
			const resp2 = responses[1].data;
			const resp3 = responses[2].data;
			buildData(resp1, resp2, resp3);
		});
	}, []);

	let content = null;
	if (dataReady) {
		content = (
			<div style={{ height: "900px", width: "1500px" }}>
				<Chart data={data} />
			</div>
		);
	}

	return content;
};

MyCountry.propTypes = {};

export default withAjaxRequest(MyCountry, axios);
