import React from "react";

const Backdrop = (props) => {
	return props.show ? (
		<div className="Backdrop" onClick={props.onClickHandler} />
	) : null;
};

export default Backdrop;
