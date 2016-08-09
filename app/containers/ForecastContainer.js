import React, {PropTypes} from 'react';
import Forecast from '../components/Forecast';
import {getForecast, getCurrentWeather} from '../helpers/api';

class ForecastContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			isLoading: true,
			forecastData: {}
		};
	}

	componentDidMount() {
		this.makeRequest(this.props.routeParams.city);
		// getCurrentWeather(this.state.city)
		// 	.then((currentWeatherData) => {
		// 		console.log(currentWeatherData);
		// 	});
	}

	componentWillReceiveProps(nextProps)  {
		this.makeRequest(nextProps.routeParams.city);
	}

	makeRequest(city) {
		getForecast(city)
			.then((forecastData) => {
				this.setState({
					forecastData: forecastData,
					isLoading: false
				})
			});
	}

	render() {
		return (
			<Forecast
				isLoading={this.state.isLoading}
				city={this.props.routeParams.city}
				forecastData={this.state.forecastData}
			/>
		)
	}
};

ForecastContainer.contextTypes = {
	router: PropTypes.object.isRequired
};

export default ForecastContainer