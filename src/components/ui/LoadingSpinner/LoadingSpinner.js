import React from "react";
import PropTypes from "prop-types";

const LoadingSpinner = (props) => {
	return props.show ? <div className="LoadingSpinner" /> : null;
};

LoadingSpinner.propTypes = {};

export default LoadingSpinner;
