import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"work"} />
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
					myDekstop-font="800 100px --fontFamily-googleSyne"
					myDekstop-color="#ffffff"
					myDekstop-text-align="center"
					myDekstop-height="260px"
					myDekstop-margin="0 0px 16px 0px"
					font="92 92px stretch pro"
					color="#ffffff"
					text-align="center"
				>
					SELECTED
					<br />
					WORK
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
				<Box myDekstop-width="560px" myDekstop-height="auto" width="560px" height="auto">
					<Image
						width="560px"
						height="auto"
						myDekstop-width="560px"
						myDekstop-border-width="1px"
						myDekstop-border-radius="50px"
						myDekstop-border-style="hidden"
						src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						myDekstop-transition="all 1s ease 0s"
						border-radius="50px"
						myDekstop-height="auto"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.9)"
					/>
					<Components.QuarklycommunityKitAnimation
						myDekstop-margin="16px 0px 0px 6px"
						trigger="click"
						iteration="once"
						animation="→ Slide Out"
						test={false}
						duration="0.5s"
						delay="0.3s"
					>
						<Link
							href="/3d-design#work"
							myDekstop-color="#ffffff"
							myDekstop-text-decoration-line="initial"
							myDekstop-hover-color="#9b50ff"
							myDekstop-font="800 24px --fontFamily-googleSyne"
							myDekstop-hover-transition="all 0.5s ease-in-out 0s"
							myDekstop-transition="all 0.5s ease-in-out 0s"
							font="24px stretch pro"
							color="#ffffff"
							hover-color="#9951ff"
							text-decoration-line="initial"
						>
							3D DESIGN
						</Link>
					</Components.QuarklycommunityKitAnimation>
				</Box>
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					myDekstop-margin="0px 0px 0px 95px"
					width="560px"
					margin="0px 0px 0px 33px"
					height="auto"
				>
					<Box
						myDekstop-width="560px"
						myDekstop-height="420px"
						myDekstop-background="#12041e"
						myDekstop-border-radius="50px"
						myDekstop-display="flex"
						myDekstop-align-items="center"
						myDekstop-justify-content="center"
					>
						<Text myDekstop-color="#ffffff" myDekstop-font="800 28px --fontFamily-googleSyne" myDekstop-text-align="center">
							Coming Soon
						</Text>
					</Box>
					<Components.QuarklycommunityKitAnimation
						myDekstop-margin="20px 0px 0px 6px"
						trigger="click"
						iteration="once"
						animation="→ Slide Out"
						test={false}
						duration="0.5s"
						delay="0.3s"
					>
						<Link
							href="#"
							myDekstop-color="#ffffff"
							myDekstop-text-decoration-line="initial"
							myDekstop-hover-color="#9b50ff"
							myDekstop-font="800 24px --fontFamily-googleSyne"
							myDekstop-hover-transition="all 0.5s ease-in-out 0s"
							myDekstop-transition="all 0.5s ease-in-out 0s"
							font="24px stretch pro"
							color="#ffffff"
							hover-color="#9951ff"
							text-decoration-line="initial"
						>
							BRANDING
						</Link>
					</Components.QuarklycommunityKitAnimation>
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
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					width="560px"
					margin="0px 0px 0px 33px"
					height="auto"
					myDekstop-margin="0px 0px 0px 0px"
				>
					<Box
						myDekstop-width="560px"
						myDekstop-height="420px"
						myDekstop-background="#12041e"
						myDekstop-border-radius="50px"
						myDekstop-display="flex"
						myDekstop-align-items="center"
						myDekstop-justify-content="center"
					>
						<Text myDekstop-color="#ffffff" myDekstop-font="800 28px --fontFamily-googleSyne" myDekstop-text-align="center">
							Coming Soon
						</Text>
					</Box>
					<Components.QuarklycommunityKitAnimation
						myDekstop-margin="20px 0px 0px 6px"
						trigger="click"
						iteration="once"
						animation="→ Slide Out"
						test={false}
						duration="0.5s"
						delay="0.3s"
					>
						<Link
							href="#"
							myDekstop-color="#ffffff"
							myDekstop-text-decoration-line="initial"
							myDekstop-hover-color="#9b50ff"
							myDekstop-font="800 24px --fontFamily-googleSyne"
							myDekstop-hover-transition="all 0.5s ease-in-out 0s"
							myDekstop-transition="all 0.5s ease-in-out 0s"
							font="24px stretch pro"
							color="#ffffff"
							hover-color="#9951ff"
							text-decoration-line="initial"
						>
							GRAPHIC DESIGN
						</Link>
					</Components.QuarklycommunityKitAnimation>
				</Box>
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					width="560px"
					margin="0px 0px 0px 33px"
					height="auto"
					myDekstop-margin="0px 0px 0px 95px"
				>
					<Box
						myDekstop-width="560px"
						myDekstop-height="420px"
						myDekstop-background="#12041e"
						myDekstop-border-radius="50px"
						myDekstop-display="flex"
						myDekstop-align-items="center"
						myDekstop-justify-content="center"
					>
						<Text myDekstop-color="#ffffff" myDekstop-font="800 28px --fontFamily-googleSyne" myDekstop-text-align="center">
							Coming Soon
						</Text>
					</Box>
					<Components.QuarklycommunityKitAnimation
						myDekstop-margin="20px 0px 0px 6px"
						trigger="click"
						iteration="once"
						animation="→ Slide Out"
						test={false}
						duration="0.5s"
						delay="0.3s"
					>
						<Link
							href="#"
							myDekstop-color="#ffffff"
							myDekstop-text-decoration-line="initial"
							myDekstop-hover-color="#9b50ff"
							myDekstop-font="800 24px --fontFamily-googleSyne"
							myDekstop-hover-transition="all 0.5s ease-in-out 0s"
							myDekstop-transition="all 0.5s ease-in-out 0s"
							font="24px stretch pro"
							color="#ffffff"
							hover-color="#9951ff"
							text-decoration-line="initial"
						>
							UI DESIGN
						</Link>
					</Components.QuarklycommunityKitAnimation>
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
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					width="560px"
					margin="0px 0px 0px 33px"
					height="auto"
					myDekstop-margin="0px 0px 0px 0px"
				>
					<Box
						myDekstop-width="560px"
						myDekstop-height="420px"
						myDekstop-background="#12041e"
						myDekstop-border-radius="50px"
						myDekstop-display="flex"
						myDekstop-align-items="center"
						myDekstop-justify-content="center"
					>
						<Text myDekstop-color="#ffffff" myDekstop-font="800 28px --fontFamily-googleSyne" myDekstop-text-align="center">
							Coming Soon
						</Text>
					</Box>
					<Components.QuarklycommunityKitAnimation
						myDekstop-margin="20px 0px 0px 6px"
						trigger="click"
						iteration="once"
						animation="→ Slide Out"
						test={false}
						duration="0.5s"
						delay="0.3s"
					>
						<Link
							href="#"
							myDekstop-color="#ffffff"
							myDekstop-text-decoration-line="initial"
							myDekstop-hover-color="#9b50ff"
							myDekstop-font="800 24px --fontFamily-googleSyne"
							myDekstop-hover-transition="all 0.5s ease-in-out 0s"
							myDekstop-transition="all 0.5s ease-in-out 0s"
							font="24px stretch pro"
							color="#ffffff"
							hover-color="#9951ff"
							text-decoration-line="initial"
						>
							TYPEFACE
						</Link>
					</Components.QuarklycommunityKitAnimation>
				</Box>
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					width="560px"
					margin="0px 0px 0px 33px"
					height="auto"
					myDekstop-margin="0px 0px 0px 95px"
				>
					<Box
						myDekstop-width="560px"
						myDekstop-height="420px"
						myDekstop-background="#12041e"
						myDekstop-border-radius="50px"
						myDekstop-display="flex"
						myDekstop-align-items="center"
						myDekstop-justify-content="center"
					>
						<Text myDekstop-color="#ffffff" myDekstop-font="800 28px --fontFamily-googleSyne" myDekstop-text-align="center">
							Coming Soon
						</Text>
					</Box>
					<Components.QuarklycommunityKitAnimation
						myDekstop-margin="20px 0px 0px 6px"
						trigger="click"
						iteration="once"
						animation="→ Slide Out"
						test={false}
						duration="0.5s"
						delay="0.3s"
					>
						<Link
							href="#"
							myDekstop-color="#ffffff"
							myDekstop-text-decoration-line="initial"
							myDekstop-hover-color="#9b50ff"
							myDekstop-font="800 24px --fontFamily-googleSyne"
							myDekstop-hover-transition="all 0.5s ease-in-out 0s"
							myDekstop-transition="all 0.5s ease-in-out 0s"
							font="24px stretch pro"
							color="#ffffff"
							hover-color="#9951ff"
							text-decoration-line="initial"
						>
							ILLUSTRATION
						</Link>
					</Components.QuarklycommunityKitAnimation>
				</Box>
			</Section>
			<Components.Header />
			<Components.Footer myDekstop-margin="80px 0px 0px 0px" margin="80px 0px 0px 0px">
				<Override slot="box" myDekstop-width="1212px" width="1152px" />
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