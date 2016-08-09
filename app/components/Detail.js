import React, {PropTypes} from 'react';
import DayItem from './DayItem';
import {convertTemp} from '../helpers/utils';

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
    color: '#333'
  }
}

const Detail = (props) => (
	<div style={styles.descriptionContainer}>
		<DayItem day={props.weather} />
		<div style={styles.descriptionContainer}>
			<p>{props.city}</p>
			<p>{props.weather.weather[0].description}</p>
			<p>min temp: {convertTemp(props.weather.temp.min)} degrees</p>
			<p>max temp: {convertTemp(props.weather.temp.max)} degrees</p>
			<p>humidity: {props.weather.humidity}</p>
		</div>
	</div>
);

export default Detail