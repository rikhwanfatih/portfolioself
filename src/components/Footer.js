import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box, Link } from "@quarkly/widgets";
import QuarklycommunityKitAnimation from "./QuarklycommunityKitAnimation";
const defaultProps = {
	"trigger": "below",
	"animation": "↑ Slide In",
	"iteration": "once",
	"duration": "1.5s",
	"test": false,
	"sm-height": "200px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "800 34px syne",
			"color": "#ffffff",
			"align-self": "flex-end",
			"text-align": "right",
			"border-color": "rgba(255, 255, 255, 0)",
			"sm-font": "normal 800 25px --fontFamily-googlePoppins",
			"sm-letter-spacing": "2px",
			"sm-margin": "0 0px 16px 0px",
			"children": "CONTACT ME"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "grid",
			"grid-auto-flow": "column",
			"justify-content": "end",
			"grid-template-columns": "130px 180px 170px 170px",
			"margin": "40px 0px 0px 0px",
			"width": "1275px",
			"align-self": "flex-end",
			"sm-height": "35px",
			"sm-max-height": "300px",
			"sm-grid-auto-flow": "row",
			"sm-width": "525px",
			"sm-grid-template-columns": "0",
			"sm-justify-content": "normal",
			"sm-margin": "20px 0px 5px 0px",
			"children": <>
				<Link
					href="mailto:rikhwanfatihfiardhi541@gmail.com"
					align-self="center"
					text-decoration-line="initial"
					color="#ffffff"
					font="800 1em syne"
					text-align="left"
					hover-color="transparent"
					hover-text-shadow="0 0 5px #ffffff"
					sm-font="700 12px --fontFamily-googlePoppins"
					sm-width="100px"
					sm-text-align="right"
					sm-grid-column="200"
					sm-margin="0px 0px 5px 0px"
					cursor="crosshair"
					myDekstop-transition="--transition05"
				>
					EMAIL
				</Link>
				<Link
					href="https://www.behance.net/rikhwanfiardhi"
					text-decoration-line="initial"
					align-self="center"
					color="#ffffff"
					font="800 1em syne"
					text-align="left"
					hover-color="transparent"
					hover-text-shadow="0 0 5px #ffffff"
					sm-font="700 12px --fontFamily-googlePoppins"
					sm-width="100px"
					sm-text-align="right"
					sm-grid-column="200"
					cursor="crosshair"
					sm-margin="0px 0px 5px 0px"
					myDekstop-transition="--transition05"
				>
					BEHANCE
				</Link>
				<Link
					href="https://www.dribbble.com/rikhwanfatih"
					align-self="center"
					text-decoration-line="initial"
					color="#ffffff"
					font="800 1em syne"
					text-align="left"
					hover-color="transparent"
					hover-text-shadow="0 0 5px #ffffff"
					sm-font="700 12px --fontFamily-googlePoppins"
					sm-width="100px"
					sm-text-align="right"
					sm-grid-column="200"
					sm-margin="0px 0px 5px 0px"
					cursor="crosshair"
					myDekstop-transition="--transition05"
				>
					DRIBBBLE
				</Link>
				<Link
					href="https://www.instagram.com/rikhwanfatih"
					align-self="center"
					text-decoration-line="initial"
					color="#ffffff"
					font="800 1em syne"
					text-align="right"
					hover-color="transparent"
					hover-text-shadow="0 0 5px #ffffff"
					sm-font="700 12px --fontFamily-googlePoppins"
					sm-width="100px"
					sm-text-align="right"
					sm-grid-column="200"
					cursor="crosshair"
					myDekstop-transition="--transition05"
				>
					INSTAGRAM
				</Link>
			</>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "#ffffff",
			"font": "400 16px syne",
			"sm-font": "100 12px poppins",
			"text-align": "left",
			"width": "300px",
			"sm-text-decoration-line": "initial",
			"display": "block",
			"margin": "70px 0px 0px 0px",
			"sm-margin": "70px 0px 30px 0px",
			"children": <>
				Made with 💜 ©CreativeRf2021{" "}
				<br />
				All Rights Reserved
			</>
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitAnimation {...rest}>
		<Text {...override("text")} />
		<Box {...override("box")} />
		<Text {...override("text1")} />
		{children}
	</QuarklycommunityKitAnimation>;
};

Object.assign(Footer, { ...QuarklycommunityKitAnimation,
	defaultProps,
	overrides
});
export default Footer;