import React, {PropTypes} from 'react';

const Forecast = (props) => {
	console.log(props);
	return (
		<div>
			{ props.isLoading ? 
				<h2 className="loading">Loading</h2> :
				<h2 className="loading">Forecast component</h2>
			}
		</div>
	)
};

Forecast.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.object.isRequired
};	

export default Forecast