import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Hr, Section, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
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
				myDekstop-margin="30px 0px 0px 0px"
				margin="100px 0px 0px 0px"
				iteration="once"
				animation="↑ Slide In"
				delay="1s"
				myDekstop-height="130px"
			>
				<Text
					myDekstop-font="800 100px --fontFamily-googleSyne"
					myDekstop-color="#ffffff"
					myDekstop-text-align="center"
					myDekstop-height="130px"
					myDekstop-margin="0 0px 16px 0px"
					font="92 92px stretch pro"
					color="#ffffff"
					text-align="center"
				>
					ABOUT ME
				</Text>
			</Components.QuarklycommunityKitAnimation>
			<Section myDekstop-display="grid" myDekstop-margin="50px 0 0 0">
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
						width="64px"
						height="64px"
						xxl-width="560px"
						xxl-height="auto"
						xxl-transition="--transition05"
						xxl-border-width="1px"
						xxl-border-radius="50px"
						xxl-border-style="hidden"
						xxl-hover-transition="--transition05"
						xxl-hover-transform="scale(0.9)"
						myDekstop-width="560px"
						myDekstop-height="auto"
						myDekstop-transition="--transition05"
						myDekstop-border-width="1px"
						myDekstop-border-style="hidden"
						myDekstop-border-radius="50px"
						myDekstop-hover-transition="--transition05"
						myDekstop-hover-transform="scale(0.9)"
						src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/profile%20me.png?v=2021-08-11T18:05:55.948Z"
					/>
				</Box>
				<Box
					myDekstop-width="560px"
					myDekstop-height="auto"
					myDekstop-margin="0px 0px 0px 95px"
					width="560px"
					margin="0px 0px 0px 33px"
					height="auto"
				>
					<Text
						myDekstop-color="#ffffff"
						myDekstop-font="600 48px --fontFamily-googleSyne"
						myDekstop-text-align="left"
						myDekstop-width="560px"
						myDekstop-margin="0 0px 16px 0px"
					>
						HI. I AM RIKHWAN FATIH FIARDHI. I'M A YOUNG 20 YEAR-OLD DESIGNER.
					</Text>
					<Hr
						myDekstop-border-radius="50px"
						myDekstop-border-color="#ffffff"
						myDekstop-background="#ffffff"
						myDekstop-height="0.2px"
						myDekstop-border-style="none"
						myDekstop-margin="50px 0px 16px 0px"
						myDekstop-padding="0px 0px 2px 0px"
					/>
					<Text myDekstop-color="#ffffff" myDekstop-font="400 30px/100% --fontFamily-googleSyne" myDekstop-margin="50px 0px 16px 0px" myDekstop-text-align="right">
						Location
						<br />
						<br />
						Lampung ( Indonesia )
					</Text>
				</Box>
			</Section>
			<Hr
				myDekstop-border-radius="50px"
				myDekstop-border-color="#ffffff"
				myDekstop-background="#ffffff"
				myDekstop-height="0.2px"
				myDekstop-border-style="none"
				myDekstop-margin="100px 0px 16px 0px"
				myDekstop-padding="0px 0px 2px 0px"
			/>
			<Text myDekstop-color="#ffffff" myDekstop-font="400 30px --fontFamily-googleSyne" myDekstop-margin="16px 0px 16px 0px">
				I HAVE 3+ YEARS OF EXPERIENCE IN THE DESIGN WORLD WORKING ON SIDE PROJECTS AND WITH CLIENTS. BUT MY SKILLS DON'T STOP THERE. I'M CONTINUING TO SEARCH FOR NEW THINGS AND NEW EXPERIENCES IN THIS HUGE WORLD OF CREATIVITY. THROUGH THIS, I HAVE LEARNED SELF-TAUGHT WEB DEVELOPMENT, UI DESIGN, 3D DESIGN, GRAPHIC DESIGN, AND SOME VIDEO ANIMATION (MOTION DESIGN).
			</Text>
			<Section myDekstop-flex-direction="row">
				<Override slot="SectionContent" myDekstop-flex-direction="row" myDekstop-flex="1 1 0%" myDekstop-margin="100px 0px 0px 0px" />
				<Box myDekstop-width="350px">
					<Text myDekstop-color="#ffffff" myDekstop-font="800 48px --fontFamily-googleSyne">
						INFO
						<br />
						<Span
							myDekstop-font="600 24px --fontFamily-googleSyne"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							MY CREATIVE FIELDS :
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									myDekstop-font="400 24px --fontFamily-googleSyne"
								>
									⊙ GRAPHIC DESIGN
									<br />
									⊙ UI/UX DESIGN
									<br />
									⊙ 3D DESIGN
									<br />
									⊙ BRAND IDENTITY
									<br />
									⊙ TYPE DESIGN
									<br />
									⊙ ICONS DESIGN
								</Span>
							</Span>
						</Span>
					</Text>
				</Box>
				<Box myDekstop-width="400px" myDekstop-margin="0px 0px 0px 55px">
					<Text myDekstop-color="#ffffff" myDekstop-font="800 48px --fontFamily-googleSyne">
						TOOLS
						<Span
							myDekstop-font="24px poppins"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
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
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									myDekstop-font="400 24px --fontFamily-googleSyne"
								>
									⊙ ILLUSTRATOR
									<br />
									⊙ PHOTOSHOP
									<br />
									⊙ SPLINE 3D
									<br />
									⊙ FIGMA
									<br />
									⊙ QUARKLY
									<br />
									⊙ RIVE
									<br />
									⊙ CINEMA 4D
									<br />
								</Span>
							</Span>
						</Span>
					</Text>
				</Box>
				<Box myDekstop-width="430px">
					<Text myDekstop-color="#ffffff" myDekstop-font="800 40px --fontFamily-googleSyne">
						EDUCATION
					</Text>
					<Box myDekstop-display="flex" myDekstop-flex-direction="row" myDekstop-padding="0px 0px 0px 20" myDekstop-margin="30px 0px 0px 0px">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/itera.png?v=2021-08-10T17:47:41.196Z"
							myDekstop-width="140px"
							myDekstop-height="140px"
							myDekstop-margin="0px 0px 0px 30px"
							myDekstop-opacity="0.5"
						/>
						<Image
							width="64px"
							height="64px"
							myDekstop-margin="0px 0px 0px 70px"
							src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/dkv.png?v=2021-08-10T17:47:41.199Z"
							myDekstop-width="155px"
							myDekstop-height="155px"
							myDekstop-opacity="0.5"
						/>
					</Box>
					<Box myDekstop-display="flex" myDekstop-flex-direction="row" myDekstop-height="150px">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/vokraf.png?v=2021-08-10T17:43:39.830Z"
							myDekstop-width="190px"
							myDekstop-height="150px"
							myDekstop-margin="0px 0px 0px 15px"
							myDekstop-opacity="0.5"
						/>
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/you%20tube.png?v=2021-08-11T18:05:16.498Z"
							myDekstop-width="100px"
							myDekstop-height="150px"
							myDekstop-margin="0px 0px 0px 65px"
							myDekstop-opacity="0.4"
						/>
					</Box>
					<Box myDekstop-display="flex" myDekstop-flex-direction="row" myDekstop-padding="0px 0px 0px 20">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/c0fd0480bc3bdf00a1129848fd7813e0.png?v=2021-08-13T18:01:59.563Z"
							myDekstop-width="150px"
							myDekstop-height="150px"
							myDekstop-margin="0px 0px 0px 35px"
							myDekstop-opacity="0.3"
							myDekstop-filter="grayscale(100%)"
						/>
					</Box>
				</Box>
			</Section>
			<Components.Footer myDekstop-margin="80px 0px 0px 0px" margin="80px 0px 0px 0px">
				<Override slot="box" myDekstop-width="1212px" width="1152px" xxl-width="1230px" />
			</Components.Footer>
		</Section>
		<Components.QuarklycommunityKitBackToTop>
			<Override slot="Button" myDekstop-margin="0px 640px 0px 0px" />
		</Components.QuarklycommunityKitBackToTop>
		<Components.QuarklycommunityKitScrollIndicator myDekstop-background="rgba(143, 0, 255, 0.7)" />
		<Components.Header />
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