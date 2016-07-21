import React from 'react';
import '../main.css';
import {main} from '../styles';
import GetCityContainer from './GetCityContainer';

const Main = (props) => (
	<div style={{width: '100%', height: '92%'}}>
		<div style={main.header}>
			<h2>Clever Title</h2>
			<GetCityContainer direction='row' />
		</div>
		{props.children}
	</div>
);

export default Main