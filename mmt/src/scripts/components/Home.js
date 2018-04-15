import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Layout';
import SearchHeader from './SearchHeader';
import Location from './Location';
import TimeSelect from './TimeSelect';
import TravellerClass from './TravellerClass';

class Home extends React.Component {
	render() {
		return (
			 <Layout>
			 	<SearchHeader />
			 	<Location />
			 	<TimeSelect />
			 	<TravellerClass />

			 	<button className="btn-custom">Search</button>
			 </Layout>
		)
	}
}

export default Home;
