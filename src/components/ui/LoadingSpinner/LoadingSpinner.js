import React from "react";

const LoadingSpinner = (props) => {
	return props.show ? (
		<div className="LoadingSpinner">
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	) : null;
};

export default LoadingSpinner;
