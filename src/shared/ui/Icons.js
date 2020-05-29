import globeIcon from "../../assets/images/Globe.png";
import coFlagIcon from "../../assets/images/FlagCO.png";

export const Types = {
	globe: "globe",
	flagCO: "flagCO",
};

export const getIcon = (type) => {
	let toRet = null;

	if (type === Types.flagCO) {
		toRet = coFlagIcon;
	} else {
		toRet = globeIcon;
	}

	return toRet;
};
