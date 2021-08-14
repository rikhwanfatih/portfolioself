import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "height": "",
        "cursor": "crosshair",
        "opacity": "",
        "box-shadow": "",
        "border-style": "",
        "border-width": "",
        "background": "#000000",
        "border-radius": "",
        "mix-blend-mode": "overlay",
        "overflow-x": "hidden",
        "overflow-y": "auto",
        "display": "block",
        "transition": "all 0.5s ease 0s",
        "transform": ""
    },
    "index": {
        "height": "",
        "cursor": "crosshair",
        "opacity": "",
        "box-shadow": "",
        "border-style": "",
        "border-width": "",
        "background": "#000000",
        "border-radius": "",
        "mix-blend-mode": "overlay",
        "overflow-x": "hidden",
        "overflow-y": "auto",
        "display": "block",
        "transition": "all 0.5s ease 0s",
        "transform": ""
    },
    "work": {
        "height": "",
        "cursor": "crosshair",
        "opacity": "",
        "box-shadow": "",
        "border-style": "",
        "border-width": "",
        "background": "#000000",
        "border-radius": "",
        "mix-blend-mode": "overlay",
        "overflow-x": "hidden",
        "overflow-y": "auto",
        "display": "block",
        "transition": "all 0.5s ease 0s",
        "transform": ""
    },
    "uses": {
        "height": "",
        "cursor": "crosshair",
        "opacity": "",
        "box-shadow": "",
        "border-style": "",
        "border-width": "",
        "background": "#000000",
        "border-radius": "",
        "mix-blend-mode": "overlay",
        "overflow-x": "hidden",
        "overflow-y": "auto",
        "display": "block",
        "transition": "all 0.5s ease 0s",
        "transform": ""
    },
    "about": {
        "height": "",
        "cursor": "crosshair",
        "opacity": "",
        "box-shadow": "",
        "border-style": "",
        "border-width": "",
        "background": "#000000",
        "border-radius": "",
        "mix-blend-mode": "overlay",
        "overflow-x": "hidden",
        "overflow-y": "auto",
        "display": "block",
        "transition": "all 0.5s ease 0s",
        "transform": ""
    },
    "3d-design": {
        "height": "",
        "cursor": "crosshair",
        "opacity": "",
        "box-shadow": "",
        "border-style": "",
        "border-width": "",
        "background": "#000000",
        "border-radius": "",
        "mix-blend-mode": "overlay",
        "overflow-x": "hidden",
        "overflow-y": "auto",
        "display": "block",
        "transition": "all 0.5s ease 0s",
        "transform": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
