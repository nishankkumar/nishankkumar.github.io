import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Layout';
import CalenderView from './CalenderView';

const SelectDate = props => (
	 <Layout>
	 	<CalenderView />
	 </Layout>
)

export default SelectDate;
