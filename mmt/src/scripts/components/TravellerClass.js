import React from 'react';

class TravellerClass extends React.Component {
  render() {
    return (
    	<div className="travellers-wrap">
    		<p className="text-blue font-16 text-center">Travellers &amp; Class</p>
			<div className="class-block-wrap">
				<div className="class-block">
					<p>02</p>
					<span>Adults</span>
				</div>
				<div className="class-block">
					<p>02</p>
					<span>Childrens</span>
				</div>
				<div className="class-block">
					<p>02</p>
					<span>Infants</span>
				</div>
				<div className="class-block">
					<p>02</p>
					<span>Class</span>
				</div>
			</div>
    	</div>
    );
  }
}

export default TravellerClass;
