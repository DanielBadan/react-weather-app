import React, {PropTypes} from 'react';
import {getDate} from '../helpers/utils';

var styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		maxWidth: 1200,
		margin: '50px auto'
	},
	dayContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 35
	},
	header: {
		fontSize: 65,
		color: '#333',
		fontWeight: 100,
		textAlign: 'center'
	},
	subHeader: {
		fontSize: 30,
		color: '#333',
		fontWeight: 100
	},
	weather: {
		height: 130
	}
}

const DayItem = (props) => {
	var date = getDate(props.day.dt);
	var icon = props.day.weather[0].icon;

	return (
		<div style={styles.dayContainer} onClick={props.handleClick}>
			<img src={`./app/images/weather-icons/${icon}.svg`} alt="Weather"/>
			<h2 style={styles.subHeader}>{date}</h2>
		</div>
	);
};

const ForecastUi = (props) => (
	<div>
		<h1 style={styles.header}>{props.city}</h1>
		<div style={styles.container}>
			{props.forecast.list.map(item => <DayItem key={item.dt} day={item} handleClick={props.handleClick.bind(null, item)} />)}
		</div>
	</div>
);

const Forecast = (props) => {
	console.log(props);
	return (
		<div>
			{ props.isLoading ? 
				<h2 style={styles.header}>Loading</h2> :
				<ForecastUi 
					forecast={props.forecastData}
					city={props.city}
					handleClick={props.handleClick}
				/>
			}
		</div>
	)
};

Forecast.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.object.isRequired,
	handleClick: PropTypes.func.isRequired
};	

export default Forecast