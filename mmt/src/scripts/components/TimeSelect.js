import React from 'react';
import { Link } from "react-router-dom";
import {DAY, MONTH} from '../constant';

class TimeSelect extends React.Component {
  render() {
    return (
    	<div className={`time-select-block ${!this.props.isCloseButton && 'close-wrap'}`}>
    		{!this.props.isCloseButton && <Link to="/select-date" className="select-date" />}
    		{this.props.isCloseButton && <Link to="/" className='select-date btn-close' />}
			<div className="loc-desc clearfix">
				<div className="common-block layout-update">
					<span>DEPARTURE</span>
					<p>{this.props.dateObjFirst ? this.props.dateObjFirst.getDate() : '15'}</p>
					<div>
						<span className="light-text">{DAY[this.props.dateObjFirst ? this.props.dateObjFirst.getDay() : 0]}</span>
						<span>{MONTH[this.props.dateObjFirst ? this.props.dateObjFirst.getMonth() : 0]} {this.props.dateObjFirst ? this.props.dateObjFirst.getFullYear() : '2018'}</span>
					</div>
				</div>
				<div className="divide-block" />
				<div className="common-block layout-update">
					<span>RETURN</span>
					<p>{this.props.dateObjLast ? this.props.dateObjLast.getDate() : '15'}</p>
					<div>
						<span className="light-text">{DAY[this.props.dateObjLast ? this.props.dateObjLast.getDay() : 0]}</span>
						<span>{MONTH[this.props.dateObjFirst ? this.props.dateObjFirst.getMonth() : 0]} {this.props.dateObjFirst ? this.props.dateObjFirst.getFullYear() : '2018'}</span>
					</div>
				</div>
			</div>
    	</div>
    );
  }
}

export default TimeSelect;
