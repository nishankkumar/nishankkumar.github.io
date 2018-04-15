import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Layout';
import CalenderView from './CalenderView';
import Moment from 'react-moment';

class SelectDate extends React.Component {
	render() {
		return (
			 <Layout>
			 	<CalenderView />
			 </Layout>
		)
	}
}

export default SelectDate;
