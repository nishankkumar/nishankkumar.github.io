import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Layout';
import TimeSelect from './TimeSelect';
import {DAY, MONTH} from '../constant';

class CalendarView extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    firstSelectedDate: null,
	    secondSelectedDate: null
	  };
	}

	getFirstSunday (firstDate) {
		var offset = firstDate.getDay();

		var result = new Date(firstDate);
	  result.setDate(firstDate.getDate() - offset);
		
	  return result;
	}

	getLastSaturday (lastDate) {
		var offset = 6 - lastDate.getDay();
		
	  var result = new Date(lastDate);
	  result.setDate(lastDate.getDate() + offset);

		return result;
	}
	createCalendar(year, month) {
		var results = [];

		// find out first and last days of the month
		var firstDate = new Date(year, month, 1);
		var lastDate = new Date(year, month + 1, 0)

		// calculate first sunday and last saturday
		var firstSunday = this.getFirstSunday(firstDate);
		var lastSaturday = this.getLastSaturday(lastDate);

		// iterate days starting from first sunday
		var iterator = new Date(firstSunday);
		var i = 0;

		// ..until last saturday
		while (iterator <= lastSaturday) {
			if (i++ % 7 === 0) {
		// start new week when sunday
		var week = [];
		results.push(week);
		}
		// push day to week
		week.push({
			date: new Date(iterator),
		expired: iterator <= new Date().setDate(new Date().getDate() - 1), // add indicator if before current month
		before: iterator < firstDate, // add indicator if before current month
		after: iterator > lastDate // add indicator if after current month
		});

		// iterate to next day
		iterator.setDate(iterator.getDate() + 1);
		}

		return results;
	}
	firstSelectedDate = null;
	secondSelectedDate = null;
	selectDate(d) {
		if (!this.firstSelectedDate || this.firstSelectedDate.getTime() == d.getTime()) {
			this.firstSelectedDate = d;
		}else if(this.firstSelectedDate && d.getTime() > this.firstSelectedDate.getTime()) {
			if(this.secondSelectedDate && d.getTime() < this.secondSelectedDate.getTime()){
				this.firstSelectedDate = d;
			}else{
				this.secondSelectedDate = d;
			}
		} else if (this.firstSelectedDate &&  d.getTime() < this.firstSelectedDate.getTime()) {
			let temp = this.firstSelectedDate;
			this.firstSelectedDate = d;
			this.secondSelectedDate = temp;
		}
		this.setState({
			firstSelectedDate: this.firstSelectedDate,
	    	secondSelectedDate: this.secondSelectedDate
	    });
	}
	getHighlitedClass(v){
		if(v && this.state.firstSelectedDate && v.date.getTime() == this.state.firstSelectedDate.getTime()) {
			return 'cal-cell-selected-first';
		} else if(v && this.state.secondSelectedDate &&  v.date.getTime() == this.state.secondSelectedDate.getTime()){
			return 'cal-cell-selected-last';
		} else if(v && this.state.firstSelectedDate && this.state.secondSelectedDate && v.date.getTime() < this.state.secondSelectedDate.getTime() && v.date.getTime() > this.state.firstSelectedDate.getTime()) {
			return 'cal-cell-selected-middle';
		}
		return '';
	}
	render() {
		const date = new Date();
		return (
			<div>
			 	<TimeSelect isCloseButton dateObjFirst={this.state.firstSelectedDate || undefined} dateObjLast={this.state.secondSelectedDate || undefined} />

			 	{
			 		[...Array(12 - date.getMonth())].map(function(v, i){
						return <div className="cal-month-view" key={i}>
							 <p>{MONTH[(date.getMonth() + i)]} {date.getFullYear()}</p>
							 <div className="cal-row">
							 	{
								 	DAY.map(function(val, i){
								 		return <span className="cal-col cal-day" key={i}>{val}</span>
								 	})
								}
							 </div>
							 {
							 	this.createCalendar(date.getFullYear(), (date.getMonth() + i)).map(function(value, index){
							 		return <div className="cal-row" key={index}>
											{
											 	value.map(function(v, i){
											 		return <span onClick={() => this.selectDate(v.date)} className={`cal-col ${(v.after || v.before) ? 'cal-cell-disable' : ''} ${(v.expired) ? 'cal-cell-expired' : '' } ${this.getHighlitedClass(v)}`} key={i}>{v.date.getDate()}</span>;
											 	}, this)
										 	}
										</div>
							 	}, this)
							 }
						</div>
			 		}, this)
			 	}
			</div>
		)	
	}
}

export default CalendarView;
