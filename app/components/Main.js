import React from 'react';
import Header from './Header';
import '../main.css';

const Main = (props) => (
	<div style={{width: '100%', height: '92%'}}>
		<Header/>
		{props.children}
	</div>
);

export default Main