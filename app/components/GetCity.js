import React, {PropTypes} from 'react';
import {getCity} from '../styles';

const GetCity = (props) => (
	<div style={Object.assign(getCity, {flexDirection: props.direction})}>
		<input type="text" value={props.city} placeholder="Chisinau, Moldova" className="form-control" onChange={props.onUpdateCity} />
		<button className="btn btn-success m-10" onClick={props.onSubmitCity}>Get Weather</button>
	</div>
);

GetCity.propTypes = {
	city: PropTypes.string,
	onSubmitCity: PropTypes.func.isRequired,
	onUpdateCity: PropTypes.func.isRequired,
	direction: PropTypes.string
};

GetCity.defaultProps = {
	direction: 'column'
};

export default GetCity