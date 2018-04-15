import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import SelectDate from './SelectDate';

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			 <Router>
			    <div>
					<Route exact path="/" component={Home} />
					<Route path="/Home" component={Home} />
					<Route path="/select-date" component={SelectDate} />
			    </div>
			 </Router>
			)
	}
}

export default App
