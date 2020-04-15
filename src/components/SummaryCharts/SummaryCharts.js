import React, { Component } from "react";
import { Chart } from "react-charts";
import ChartTable from "../ChartTable/ChartTable";
import axios from "../../shared/Axios/Axios";

class SummaryChart extends Component {
	state = {
		fetchingData: false,
		dataReady: false,
		globalCummulativeData: {},
		globalTodayData: {},
	};

	buildDataFromResponse = (response) => {
		const globalSummaryResponse = response.Global;

		const globalTotalsCummulative = {
			confirmed: globalSummaryResponse.TotalConfirmed,
			recovered: globalSummaryResponse.TotalRecovered,
			deaths: globalSummaryResponse.TotalDeaths,
		};

		const globalTotalsToday = {
			confirmed: globalSummaryResponse.NewConfirmed,
			recovered: globalSummaryResponse.NewRecovered,
			deaths: globalSummaryResponse.NewDeaths,
		};

		const totalsCummulativeChartData = [
			{
				label: "Confirmados",
				data: [
					{
						x: "Totales - Global Acumulado",
						y: globalTotalsCummulative.confirmed,
					},
				],
			},
			{
				label: "Recuperados",
				data: [
					{
						x: "Totales - Global Acumulado",
						y: globalTotalsCummulative.recovered,
					},
				],
			},
			{
				label: "Muertos",
				data: [
					{
						x: "Totales - Global Acumulado",
						y: globalTotalsCummulative.deaths,
					},
				],
			},
		];

		const totalsTodayChartData = [
			{
				label: "Confirmados",
				data: [
					{
						x: "Totales - Global Hoy",
						y: globalTotalsToday.confirmed,
					},
				],
			},
			{
				label: "Recuperados",
				data: [
					{
						x: "Totales - Global Hoy",
						y: globalTotalsToday.recovered,
					},
				],
			},
			{
				label: "Muertos",
				data: [
					{
						x: "Totales - Global Hoy",
						y: globalTotalsToday.deaths,
					},
				],
			},
		];

		const axes = [
			{ primary: true, type: "ordinal", position: "bottom" },
			{ position: "left", type: "linear", stacked: false },
		];

		const globalCummulativeTableData = {
			label: "Totales - Global Acumulado",
			totalConfirmedqqq: globalSummaryResponse.TotalConfirmed,
			totalRecovered: globalSummaryResponse.TotalRecovered,
			totalDeaths: globalSummaryResponse.TotalDeaths,
		};

		const globalTodayTableData = {
			label: "Totales - Global Hoy",
			totalConfirmed: globalSummaryResponse.NewConfirmed,
			totalRecovered: globalSummaryResponse.NewRecovered,
			totalDeaths: globalSummaryResponse.NewDeaths,
		};

		const globalCummulativeData = {
			chart: {
				data: totalsCummulativeChartData,
				axes: axes,
			},
			table: {
				data: globalCummulativeTableData,
			},
		};

		const globalTodayData = {
			chart: {
				data: totalsTodayChartData,
				axes: axes,
			},
			table: {
				data: globalTodayTableData,
			},
		};

		this.setState({
			fetchingData: false,
			dataReady: true,
			globalCummulativeData: globalCummulativeData,
			globalTodayData: globalTodayData,
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

	render() {
		let content = null;
		if (this.state.dataReady) {
			content = (
				<div className="SummaryCharts">
					<div className="Chart">
						<Chart
							data={this.state.globalCummulativeData.chart.data}
							series={{
								type: "bar",
							}}
							axes={this.state.globalCummulativeData.chart.axes}
							tooltip
						/>
					</div>
					<ChartTable data={this.state.globalCummulativeData.table.data} />
					<div className="Chart">
						<Chart
							data={this.state.globalTodayData.chart.data}
							series={{
								type: "bar",
							}}
							axes={this.state.globalTodayData.chart.axes}
							tooltip
						/>
					</div>
					<ChartTable data={this.state.globalTodayData.table.data} />
				</div>
			);
		} else if (this.state.fetchingData) {
			content = <h1>Fetching data ...</h1>;
		} else {
			content = <p>Chart placeholder</p>;
		}

		return content;
	}
}

export default SummaryChart;
