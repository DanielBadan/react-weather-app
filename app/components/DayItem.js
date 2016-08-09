import React, {PropTypes} from 'react';
import {getDate} from '../helpers/utils';

var styles = {
	dayContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: 35
	},
	subHeader: {
		fontSize: 30,
		color: '#333',
		fontWeight: 100
	}
};

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

DayItem.propTypes = {
	day: PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.array.isRequired
	}).isRequired,
	handleClick: PropTypes.func
};

export default DayItem