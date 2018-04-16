import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Layout';
import CalendarView from './CalendarView';

const SelectDate = props => (
	 <Layout>
	 	<CalendarView />
	 </Layout>
)

export default SelectDate;
