import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "../../../shared/Axios/Axios";
import withAjaxRequest from "../../../hoc/withAjaxRequest/withAjaxRequest";

class Global extends Component {
	state = {
		fetchingData: false,
		dataReady: false,
		data: {},
	};

	buildData = (respConfirmed, respRecovered, respDeaths) => {
        console.log("respConfirmed", respConfirmed);
        console.log("respRecovered", respRecovered);
        console.log("respDeaths", respDeaths);
    };

	componentDidMount = () => {
		this.setState({ fetchingData: true });
		const req1 = axios.get("/country/colombia/status/confirmed");
		const req2 = axios.get("/country/colombia/status/recovered");
		const req3 = axios.get("/country/colombia/status/deaths");

		axios.all([req1, req2, req3]).then(
			axios.spread((...responses) => {
				const resp1 = responses[0].data;
				const resp2 = responses[1].data;
				const resp3 = responses[2].data;
				this.buildData(resp1, resp2, resp3);
			})
		);
	};

	render = () => {
		return null;
	};
}

Global.propTypes = {};

export default withAjaxRequest(Global, axios);
