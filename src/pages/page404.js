import React from "react";
import theme from "theme";
import { Theme, Link, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				CreativeRf
			</title>
			<meta name={"description"} content={"this my portfolio"} />
			<meta property={"og:title"} content={"CreativeRf"} />
			<meta property={"og:description"} content={"this my portfolio"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/CR-RF.png?v=2021-07-13T16:03:26.579Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/CR-RF.png?v=2021-07-13T16:03:26.579Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/CR-RF.png?v=2021-07-13T16:03:26.579Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/CR-RF.png?v=2021-07-13T16:03:26.579Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/CR-RF.png?v=2021-07-13T16:03:26.579Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/CR-RF.png?v=2021-07-13T16:03:26.579Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/CR-RF.png?v=2021-07-13T16:03:26.579Z"} />
			<meta name={"msapplication-TileColor"} content={"#000000"} />
		</Helmet>
		<Section height="700px">
			<Components.QuarklycommunityKitLottie
				path="https://assets6.lottiefiles.com/packages/lf20_mnbe0peu.json"
				bottom="168px"
				height="360px"
				left="551px"
				position="absolute"
				right="auto"
				top="auto"
				width="238.312px"
				myDekstop-bottom="173.57142857142856px"
				myDekstop-left="551px"
				myDekstop-right="auto"
				myDekstop-top="195px"
				myDekstop-height="331.42857142857144px"
			/>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60eda14c76068b001759f9a7"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});