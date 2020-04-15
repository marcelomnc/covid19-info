import React, { Component } from "react";
import ABComparison from "../../ABComparison/ABComparison";
import axios from "../../../shared/Axios/Axios";
import withAjaxRequest from "../../../hoc/withAjaxRequest/withAjaxRequest";

class Today extends Component {
	state = {
		fetchingData: false,
		dataReady: false,
		data: {},
	};

	buildDataFromResponse = (response) => {
		const entityALabel = "Totales - Global Hoy";
		const entityBLabel = "Totales - Colombia Hoy";
		const confirmedLabel = "Confirmados";
		const recoveredLabel = "Recuperados";
		const deathsLabel = "Muertos";

		let globalSummaryResponse = response.Global;
		let countrySummaryResponse = response.Countries;
		countrySummaryResponse = countrySummaryResponse.filter(
			(current) => current.CountryCode === "CO"
		);
		countrySummaryResponse = countrySummaryResponse[0];

		const globalCummulativeData = {
			confirmed: globalSummaryResponse.NewConfirmed,
			recovered: globalSummaryResponse.NewRecovered,
			deaths: globalSummaryResponse.NewDeaths,
		};

		const countryCummulativeData = {
			confirmed: countrySummaryResponse.NewConfirmed,
			recovered: countrySummaryResponse.NewRecovered,
			deaths: countrySummaryResponse.NewDeaths,
		};

		const globalCummulativeChartData = [
			{
				label: confirmedLabel,
				data: [
					{
						x: entityALabel,
						y: globalCummulativeData.confirmed,
					},
				],
			},
			{
				label: recoveredLabel,
				data: [
					{
						x: entityALabel,
						y: globalCummulativeData.recovered,
					},
				],
			},
			{
				label: deathsLabel,
				data: [
					{
						x: entityALabel,
						y: globalCummulativeData.deaths,
					},
				],
			},
		];

		const countryCummulativeChartData = [
			{
				label: confirmedLabel,
				data: [
					{
						x: entityBLabel,
						y: countryCummulativeData.confirmed,
					},
				],
			},
			{
				label: recoveredLabel,
				data: [
					{
						x: entityBLabel,
						y: countryCummulativeData.recovered,
					},
				],
			},
			{
				label: deathsLabel,
				data: [
					{
						x: entityBLabel,
						y: countryCummulativeData.deaths,
					},
				],
			},
		];

		const globalCummulativeTableData = {
			label: entityALabel,
			confirmed: globalCummulativeData.confirmed,
			recovered: globalCummulativeData.recovered,
			deaths: globalCummulativeData.deaths,
		};

		const countryCummulativeTableData = {
			label: entityBLabel,
			confirmed: countryCummulativeData.confirmed,
			recovered: countryCummulativeData.recovered,
			deaths: countryCummulativeData.deaths,
		};

		const entityAData = {
			label: entityALabel,
			chart: globalCummulativeChartData,
			table: globalCummulativeTableData,
		};

		const entityBData = {
			label: entityBLabel,
			chart: countryCummulativeChartData,
			table: countryCummulativeTableData,
		};

		this.setState({
			fetchingData: false,
			dataReady: true,
			data: {
				entityAData: entityAData,
				entityBData: entityBData,
			},
		});
	};

	componentDidMount = () => {
		this.setState({ fetchingData: true });
		axios
			.get("/summary")
			.then((response) => {
				this.buildDataFromResponse(response.data);
			})
			.catch((error) => {
				this.setState({ fetchingData: false });
				console.error("Error invoking Covid API !", error);
			});
	};

	render = () => {
		let content = null;
		if (this.state.dataReady) {
			content = (
				<ABComparison
					entityAData={this.state.data.entityAData}
					entityBData={this.state.data.entityBData}
				/>
			);
		}

		return content;
	};
}

export default withAjaxRequest(Today, axios);
