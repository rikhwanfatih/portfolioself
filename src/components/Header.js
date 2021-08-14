import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Link, Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"myDekstop-height": "94px",
	"myDekstop-background": "rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,#000000 79%) 0% 0% /auto repeat scroll padding-box",
	"myDekstop-position": "fixed",
	"myDekstop-top": "0px",
	"myDekstop-right": "0px",
	"myDekstop-bottom": "auto",
	"myDekstop-left": "0px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "385.49355555555553px",
			"height": "101.86523404255317px",
			"src": "https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/ezgif.com-gif-maker%20%283%29.gif?v=2021-07-27T09:47:05.505Z",
			"position": "absolute",
			"bottom": "auto",
			"left": "60px",
			"top": "-25px",
			"sm-bottom": "auto",
			"sm-height": "28.75px",
			"sm-left": "167px",
			"sm-right": "auto",
			"sm-top": "16px",
			"sm-width": "239.266px",
			"object-fit": "cover",
			"right": "auto",
			"myDekstop-bottom": "7px",
			"myDekstop-left": "43.72727272727275px",
			"myDekstop-right": "943.031px",
			"myDekstop-top": "auto",
			"myDekstop-width": "360.24172727272725px",
			"myDekstop-height": "75.859px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"myDekstop-width": "102px",
			"myDekstop-height": "46px",
			"myDekstop-display": "flex",
			"myDekstop-align-items": "center",
			"myDekstop-justify-content": "center",
			"myDekstop-border-width": "1.5px",
			"myDekstop-border-style": "solid",
			"myDekstop-border-color": "#ffffff",
			"myDekstop-border-radius": "30px",
			"myDekstop-transition": "--transition05",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-transform": "translateY(5px)",
			"myDekstop-margin": "0px 0px 0px 20px"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/about",
			"myDekstop-color": "#ffffff",
			"myDekstop-font": "800 10px syne",
			"myDekstop-letter-spacing": "2.5px",
			"myDekstop-text-decoration-line": "initial",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-color": "#bc57ff",
			"myDekstop-transition": "--transition05",
			"children": "About"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"myDekstop-width": "102px",
			"myDekstop-height": "46px",
			"myDekstop-display": "flex",
			"myDekstop-align-items": "center",
			"myDekstop-justify-content": "center",
			"myDekstop-border-width": "1.5px",
			"myDekstop-border-style": "solid",
			"myDekstop-border-color": "#ffffff",
			"myDekstop-border-radius": "30px",
			"myDekstop-transition": "--transition05",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-transform": "translateY(5px)",
			"myDekstop-margin": "0px 0px 0px 20px"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/uses",
			"myDekstop-color": "#ffffff",
			"myDekstop-font": "800 10px syne",
			"myDekstop-letter-spacing": "2.5px",
			"myDekstop-text-decoration-line": "initial",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-color": "#bc57ff",
			"myDekstop-transition": "--transition05",
			"children": "Uses"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"myDekstop-width": "102px",
			"myDekstop-height": "46px",
			"myDekstop-display": "flex",
			"myDekstop-align-items": "center",
			"myDekstop-justify-content": "center",
			"myDekstop-border-width": "1.5px",
			"myDekstop-border-style": "solid",
			"myDekstop-border-color": "#ffffff",
			"myDekstop-border-radius": "30px",
			"myDekstop-transition": "--transition05",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-transform": "translateY(5px)",
			"myDekstop-margin": "0px 0px 0px 20px"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/work",
			"myDekstop-color": "#ffffff",
			"myDekstop-font": "800 10px syne",
			"myDekstop-letter-spacing": "2.5px",
			"myDekstop-text-decoration-line": "initial",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-color": "#bc57ff",
			"myDekstop-transition": "--transition05",
			"children": "Work"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"myDekstop-width": "102px",
			"myDekstop-height": "46px",
			"myDekstop-display": "flex",
			"myDekstop-align-items": "center",
			"myDekstop-justify-content": "center",
			"myDekstop-border-width": "1.5px",
			"myDekstop-border-style": "solid",
			"myDekstop-border-color": "#ffffff",
			"myDekstop-border-radius": "30px",
			"myDekstop-transition": "--transition05",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-transform": "translateY(5px)"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "/index",
			"myDekstop-color": "#ffffff",
			"myDekstop-font": "800 10px syne",
			"myDekstop-letter-spacing": "2.5px",
			"myDekstop-text-decoration-line": "initial",
			"myDekstop-hover-transition": "--transition05",
			"myDekstop-hover-color": "#bc57ff",
			"myDekstop-transition": "--transition05",
			"children": "Home"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" myDekstop-height="auto" myDekstop-flex-direction="row-reverse" />
		<Image {...override("image")} />
		<Box {...override("box")}>
			<Link {...override("link")} />
		</Box>
		<Box {...override("box1")}>
			<Link {...override("link1")} />
		</Box>
		<Box {...override("box2")}>
			<Link {...override("link2")} />
		</Box>
		<Box {...override("box3")}>
			<Link {...override("link3")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;