import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"uses"} />
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
				myDekstop-height="260px"
				myDekstop-margin="30px 0px 0px 0px"
				margin="100px 0px 0px 0px"
				iteration="once"
				animation="↑ Slide In"
				delay="1s"
			>
				<Text
					myDekstop-font="800 100Px --fontFamily-googleSyne"
					myDekstop-color="#ffffff"
					myDekstop-text-align="center"
					myDekstop-height="260px"
					myDekstop-margin="0 0px 16px 0px"
					font="92 92px stretch pro"
					color="#ffffff"
					text-align="center"
				>
					WHAT I
					<br />
					USE
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
					xxl-transition="--transition05"
					xxl-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
				/>
				<Box myDekstop-width="560px" myDekstop-height="auto" width="560px" height="auto">
					<Text
						xxl-color="#ffffff"
						xxl-font="45px stretch pro"
						xxl-transition="--transition05"
						xxl-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
						myDekstop-color="#ffffff"
						myDekstop-font="800 35px --fontFamily-googleSyne"
						myDekstop-transition="--transition05"
						myDekstop-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
					>
						Hardware
						<br />
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Span xxl-font="45px poppins" myDekstop-font="700 35px --fontFamily-googleSyne">
								⊗ Asus X441B
								<br />
								⊗ Xiaomi note 4
								<br />
								⊗ Huion h430p
								<br />
								⊗ Logitech
							</Span>
						</Span>
					</Text>
				</Box>
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					width="560px"
					height="auto"
					xxl-margin="0px 0px 0px 250px"
					myDekstop-margin="0px 0px 0px 49px"
				>
					<Text
						xxl-color="#ffffff"
						xxl-font="28px stretch pro"
						xxl-transition="--transition05"
						xxl-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
						myDekstop-color="#ffffff"
						myDekstop-font="800 24px --fontFamily-googleSyne"
						myDekstop-transition="--transition05"
						myDekstop-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
					>
						Software Dekstop
						<br />
						<br />
						<Span
							xxl-font="28px poppins"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							myDekstop-font="700 24px --fontFamily-googleSyne"
						>
							⊗ Adobe family
							<br />
							⊗ Figma
							<br />
							⊗ Quarkly - web dev
							<br />
							⊗ Cinema 4d
							<br />
							⊗ Spline 3d
							<br />
							⊗ Fontlab
							<br />
							⊗ Affinity Designer
						</Span>
					</Text>
				</Box>
			</Section>
			<Section myDekstop-display="grid" xxl-transition="--transition05" xxl-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)">
				<Override
					slot="SectionContent"
					myDekstop-width="1212.3px"
					myDekstop-flex-direction="row"
					myDekstop-margin="30px 0px 0px 0px"
					flex-direction="row"
					width="1212.3px"
				/>
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					width="560px"
					height="auto"
					myDekstop-margin="0px 0px 0px 100px"
				>
					<Text
						xxl-color="#ffffff"
						xxl-font="24px stretch pro"
						xxl-transition="--transition05"
						xxl-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
						myDekstop-color="#ffffff"
						myDekstop-font="800 20px --fontFamily-googleSyne"
						myDekstop-transition="--transition05"
						myDekstop-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
					>
						Website i use usually
						<br />
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Span
								xxl-font="24px poppins"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								myDekstop-font="20px poppins"
							>
								⊗ Product Hunt
								<br />
								⊗ Dopely Colors
								<br />
								⊗ Awwwards
								<br />
								⊗ Product design resources
								<br />
								⊗ Rive
								<br />
								⊗ Lottie animation
							</Span>
						</Span>
					</Text>
				</Box>
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					width="560px"
					height="auto"
					xxl-margin="0px 0px 0px 250px"
					myDekstop-margin="0px 0px 0px 200px"
				>
					<Text
						xxl-color="#ffffff"
						xxl-font="35px stretch pro"
						xxl-transition="--transition05"
						xxl-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
						myDekstop-color="#ffffff"
						myDekstop-font="800 35px --fontFamily-googleSyne"
						myDekstop-transition="--transition05"
						myDekstop-transform="matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"
					>
						Software Mobile
						<br />
						<br />
						<Span
							xxl-font="35px poppins"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							myDekstop-font="700 35px --fontFamily-googleSyne"
						>
							⊗ Adobe Spark post
							<br />
							⊗ Slack
							<br />
							⊗ Alight Motion
							<br />
							⊗ Chrome
							<br />
							⊗ Lottie
						</Span>
					</Text>
				</Box>
			</Section>
			<Components.Header />
			<Components.Footer myDekstop-margin="150px 0px 0px 0px" margin="80px 0px 0px 0px" xxl-margin="15px 0px 0px 0px">
				<Override slot="box" myDekstop-width="1212px" width="1152px" xxl-width="1235px" />
			</Components.Footer>
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