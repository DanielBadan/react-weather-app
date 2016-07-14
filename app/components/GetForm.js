import React, {PropTypes} from 'react';

const GetForm = (props) => (
	<div style={props.styles}>
		<input type="text" placeholder="Chisinau, Moldova" className="form-control"/>
		<button className="btn btn-success mt-10">Get Weather</button>
	</div>
);

GetForm.propTypes = {
	styles: PropTypes.object
};

export default GetForm