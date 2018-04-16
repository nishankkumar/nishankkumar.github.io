import React from 'react';
import { Link } from "react-router-dom";
import {DAY, MONTH} from '../constant';


const TimeSelect = props => (
	<div className={`time-select-block ${!props.isCloseButton && 'close-wrap'}`}>
		<div className="loc-desc clearfix">
			<div className="common-block layout-update">
				<span>DEPARTURE</span>
				<p>{props.dateObjFirst.getDate()}</p>
				<div>
					<span className="light-text">{DAY[props.dateObjFirst.getDay()]}</span>
					<span>{MONTH[props.dateObjFirst.getMonth()]} {props.dateObjFirst.getFullYear()}</span>
				</div>
			</div>
			<div className="divide-block" />
			<div className="common-block layout-update">
				<span>RETURN</span>
				<p>{props.dateObjLast.getDate()}</p>
				<div>
					<span className="light-text">{DAY[props.dateObjLast.getDay()]}</span>
					<span>{MONTH[props.dateObjFirst.getMonth()]} {props.dateObjFirst.getFullYear()}</span>
				</div>
			</div>
		</div>
		{!props.isCloseButton && <Link to="/select-date" className="select-date" />}
		{props.isCloseButton && <Link to="/" className='select-date btn-close' />}
	</div>
)

TimeSelect.defaultProps = {
  dateObjFirst: new Date(),
  dateObjLast: new Date(),
  isCloseButton: false,
};

TimeSelect.propTypes = {
	dateObjFirst: React.PropTypes.object.isRequired,
	dateObjLast: React.PropTypes.object.isRequired,
	isCloseButton: React.PropTypes.bool.isRequired,
};

export default TimeSelect;
