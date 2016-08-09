import React, {PropTypes} from 'react';
import DayItem from './DayItem';

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
	header: {
		fontSize: 65,
		color: '#333',
		fontWeight: 100,
		textAlign: 'center'
	},
	weather: {
		height: 130
	}
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