import React from 'react';

class Location extends React.Component {
  render() {
    return (
    	<div className="location-block">
			<div className="loc-desc clearfix">
				<div className="common-block">
					<span>From</span>
					<p>
						BOM
					</p>
					<div>
						<span>
							Mumbai, IND
						</span>
						<span className="light-text">
							CSI Airport
						</span>
					</div>
				</div>
				<div className="swap-block">
					<img src="/public/img/roundtrip.png" />
				</div>
				<div className="common-block">
					<span>To</span>
					<p>
						DEL
					</p>
					<div>
						<span>
							New Delhi, IND
						</span>
						<span className="light-text">
							IGI Airport
						</span>
					</div>
				</div>
			</div>
    	</div>
    );
  }
}

export default Location;
