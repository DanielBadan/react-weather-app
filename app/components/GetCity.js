import React, {PropTypes} from 'react';
import {getCity} from '../styles';

let Button = (props) => (
	<button 
		type='button'
		className='btn btn-success m-10' 
		onClick={props.onSubmitCity}>
			{props.children}
	</button>
);

let InputField = (props) => (
	<input 
		type="text" 
		value={props.city} 
		placeholder="Chisinau, Moldova" 
		className="form-control" 
		onChange={props.onUpdateCity} />
)

const GetCity = (props) => (
	<div style={Object.assign(getCity, {flexDirection: props.direction})}>
		<InputField
	    onUpdateCity={props.onUpdateCity}
	    city={props.city} />
		<Button
			onSubmitCity={props.onSubmitCity}>
				Get Weather
		</Button>
	</div>
);

GetCity.propTypes = {
	city: PropTypes.string.isRequired,
	onSubmitCity: PropTypes.func.isRequired,
	onUpdateCity: PropTypes.func.isRequired,
	direction: PropTypes.string
};

export default GetCity