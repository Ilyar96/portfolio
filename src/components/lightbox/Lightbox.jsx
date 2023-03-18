import React from "react";
import LightboxComponent from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export const Lightbox = ({ open, slides, ...props }) => {
	return (
		<LightboxComponent
			open={open}
			slides={slides}
			plugins={[Zoom]}
			{...props}
		/>
	);
};
