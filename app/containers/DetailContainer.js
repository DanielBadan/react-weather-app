import React, {PropTypes, Component} from 'react';
import Detail from '../components/Detail';

class DetailContainer extends Component {
	render() {
		return (
			<Detail 
				weather={this.props.location.state.weather}
				city={this.props.routeParams.city}
			/>
		)
	}
};

DetailContainer.contextTypes = {
	router: PropTypes.object.isRequired
};

export default DetailContainer