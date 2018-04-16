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
					<img src="/public/img/roundtrip.png"
						srcSet="/public/img/roundtrip.png 1x,
					            /public/img/roundtrip@2x.png 2x,
					            /public/img/roundtrip@3x.png 3x"
		             />
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
