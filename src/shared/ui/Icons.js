import globeIcon from "../../assets/images/Globe.png";
import flagCOIcon from "../../assets/images/FlagCO.png";

export const types = {
	globe: "globe",
	flagCO: "flagCO",
};

export const getIcon = (type) => {
	let toRet = null;

	if (type === types.flagCO) {
		toRet = flagCOIcon;
	} else {
		toRet = globeIcon;
	}

	return toRet;
};
