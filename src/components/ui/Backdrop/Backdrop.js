import React from "react";
import PropTypes from "prop-types";

const Backdrop = (props) => {
	return props.show ? (
		<div className="Backdrop" onClick={props.onClickHandler} />
	) : null;
};

Backdrop.propTypes = {};

export default Backdrop;
