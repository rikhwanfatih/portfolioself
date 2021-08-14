import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"3d-design"} />
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
		<Section
			myDekstop-height="auto"
			myDekstop-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%204%20[60079AE].png?v=2021-08-07T16:08:04.742Z) 0% 0% /cover no-repeat scroll padding-box"
			height="auto"
			display="flex"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%204%20[60079AE].png?v=2021-08-07T16:08:04.742Z) 0% 0% /cover repeat scroll padding-box"
		>
			<Override slot="SectionContent" myDekstop-margin="80px 67.3438px 0px 67.3438px" />
			<Components.QuarklycommunityKitAnimation
				myDekstop-height="150px"
				myDekstop-margin="30px 0px 0px 0px"
				margin="100px 0px 0px 0px"
				iteration="once"
				animation="↑ Slide In"
				delay="1s"
			>
				<Text
					myDekstop-font="800 100px --fontFamily-googleSyne"
					myDekstop-color="#ffffff"
					myDekstop-text-align="center"
					myDekstop-height="150px"
					myDekstop-margin="0 0px 16px 0px"
					font="92 92px stretch pro"
					color="#ffffff"
					text-align="center"
				>
					3D DESIGN
				</Text>
			</Components.QuarklycommunityKitAnimation>
			<Section myDekstop-display="grid">
				<Override
					slot="SectionContent"
					myDekstop-width="1212.3px"
					myDekstop-flex-direction="row"
					myDekstop-margin="30px 0px 0px 0px"
					flex-direction="row"
					width="1212.3px"
				/>
				<Box myDekstop-width="auto" myDekstop-height="auto" width="560px" height="auto">
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/crown.png?v=2021-08-14T08:25:39.464Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
					/>
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/massage.png?v=2021-08-14T08:25:39.467Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
						myDekstop-margin="0px 0px 0px 112px"
					/>
				</Box>
			</Section>
			<Section myDekstop-display="grid">
				<Override
					slot="SectionContent"
					myDekstop-width="1212.3px"
					myDekstop-flex-direction="row"
					myDekstop-margin="30px 0px 0px 0px"
					flex-direction="row"
					width="1212.3px"
				/>
				<Box myDekstop-width="auto" myDekstop-height="auto" width="560px" height="auto">
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/pin.png?v=2021-08-14T08:25:39.566Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
					/>
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/copyright.png?v=2021-08-14T08:25:39.467Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
						myDekstop-margin="0px 0px 0px 112px"
					/>
				</Box>
			</Section>
			<Section myDekstop-display="grid">
				<Override
					slot="SectionContent"
					myDekstop-width="1212.3px"
					myDekstop-flex-direction="row"
					myDekstop-margin="30px 0px 0px 0px"
					flex-direction="row"
					width="1212.3px"
				/>
				<Box myDekstop-width="auto" myDekstop-height="auto" width="560px" height="auto">
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/shield.png?v=2021-08-14T08:25:39.467Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
					/>
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/sushi%20salmon.png?v=2021-08-14T08:25:39.467Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
						myDekstop-margin="0px 0px 0px 112px"
					/>
				</Box>
			</Section>
			<Section myDekstop-display="grid">
				<Override
					slot="SectionContent"
					myDekstop-width="1212.3px"
					myDekstop-flex-direction="row"
					myDekstop-margin="30px 0px 0px 0px"
					flex-direction="row"
					width="1212.3px"
				/>
				<Box myDekstop-width="auto" myDekstop-height="auto" width="560px" height="auto">
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/bread%20box.png?v=2021-08-14T08:25:39.464Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
					/>
					<Image
						width="64px"
						height="64px"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/sunny%20egg.png?v=2021-08-14T08:25:39.462Z"
						myDekstop-width="550px"
						myDekstop-height="550px"
						myDekstop-transition="--transition05"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.87)"
						myDekstop-margin="0px 0px 0px 112px"
					/>
				</Box>
			</Section>
			<Components.Footer myDekstop-margin="80px 0px 0px 0px" margin="80px 0px 0px 0px">
				<Override slot="box" myDekstop-width="1212px" width="1152px" />
			</Components.Footer>
			<Components.Header />
		</Section>
		<Components.QuarklycommunityKitBackToTop>
			<Override slot="Button" myDekstop-margin="0px 640px 0px 0px" />
		</Components.QuarklycommunityKitBackToTop>
		<Components.QuarklycommunityKitScrollIndicator myDekstop-background="rgba(143, 0, 255, 0.7)" />
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