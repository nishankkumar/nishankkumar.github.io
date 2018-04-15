import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Layout = (props) => {
    return (
    	<div className="mob-container">
        	<div className="main-container clearfix">
         	 {props.children}
        	</div>
    	</div>
    )
}

export default Layout;
