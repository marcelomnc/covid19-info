import React, { Component } from "react";
import ABComparison from "../ABComparison/ABComparison";
import axios from "../../shared/Axios/Axios";
import withAjaxRequest from "../../hoc/withAjaxRequest/withAjaxRequest";

class CountryComparison extends Component {
	state = {
		fetchingData: false,
		dataReady: false,
		data: {},
	};

	buildDataFromResponse = (response) => {
		const entityALabel = "Totales - Colombia Acumulado";
		const entityBLabel = "Totales - Colombia Hoy";
		const confirmedLabel = "Confirmados";
		const recoveredLabel = "Recuperados";
		const deathsLabel = "Muertos";

		let globalSummaryResponse = response.Countries;
		globalSummaryResponse = globalSummaryResponse.filter(
			(current) => current.CountryCode === "CO"
		);
		globalSummaryResponse = globalSummaryResponse[0];

		const globalCummulativeData = {
			confirmed: globalSummaryResponse.TotalConfirmed,
			recovered: globalSummaryResponse.TotalRecovered,
			deaths: globalSummaryResponse.TotalDeaths,
		};

		const globalTodayData = {
			confirmed: globalSummaryResponse.NewConfirmed,
			recovered: globalSummaryResponse.NewRecovered,
			deaths: globalSummaryResponse.NewDeaths,
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

		const globalTodayChartData = [
			{
				label: confirmedLabel,
				data: [
					{
						x: entityBLabel,
						y: globalTodayData.confirmed,
					},
				],
			},
			{
				label: recoveredLabel,
				data: [
					{
						x: entityBLabel,
						y: globalTodayData.recovered,
					},
				],
			},
			{
				label: deathsLabel,
				data: [
					{
						x: entityBLabel,
						y: globalTodayData.deaths,
					},
				],
			},
		];

		const globalCummulativeTableData = {
			label: entityALabel,
			confirmed: globalSummaryResponse.TotalConfirmed,
			recovered: globalSummaryResponse.TotalRecovered,
			deaths: globalSummaryResponse.TotalDeaths,
		};

		const globalTodayTableData = {
			label: entityBLabel,
			confirmed: globalSummaryResponse.NewConfirmed,
			recovered: globalSummaryResponse.NewRecovered,
			deaths: globalSummaryResponse.NewDeaths,
		};

		const entityAData = {
			label: entityALabel,
			chart: globalCummulativeChartData,
			table: globalCummulativeTableData,
		};

		const entityBData = {
			label: entityBLabel,
			chart: globalTodayChartData,
			table: globalTodayTableData,
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

export default withAjaxRequest(CountryComparison, axios);
