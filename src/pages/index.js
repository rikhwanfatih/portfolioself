import React from "react";
import theme from "theme";
import { Theme, Link, Image, Span, Strong, Box, Section, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section display="flex">
			<Override slot="SectionContent" display="flex" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image width="64px" height="64px" src="https://uploads.quarkly.io/60e48e3b76068b001759f325/images/logo%20-%20Rf.png?v=2021-07-06T17:49:50.818Z" />
				<Menu
					display="flex"
					justify-content="center"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
					text-align="left"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override
						slot="item"
						padding="6px"
						text-align="left"
						font="normal 700 16px --fontFamily-googlePoppins"
						color="#000000"
					/>
					<Override slot="link-index">
						<Span
							font-weight="normal"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong>
								<Span color="#000000">
									Home
								</Span>
							</Strong>
						</Span>
					</Override>
					<Override slot="link-about">
						<Span
							color="#000000"
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
							>
								About
							</Span>
						</Span>
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light linear-gradient(0deg,#7100b2 0%,rgba(0,0,0,1) 100%)"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="normal 300 16px/1.5 --fontFamily-googlePoppins"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--light"
				margin="0px"
				text-align="left"
			>
				PORTOFOLIO
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
				text-align="left"
			>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="#ffffff"
				>
					Hi! I'm a Graphic Designer from Indonesia
				</Span>
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" background="--color-light">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0" text-align="center">
				Hi! I'm a graphic designer. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="normal 300 16px/1.5 --fontFamily-googlePoppins" margin="20px" border-radius="50px" background="#2c0060">
				<Link
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="flex"
					color="#ffffff"
					text-decoration-line="initial"
					font="normal 400 16px/1.5 --fontFamily-googlePoppins"
					flex-direction="row"
					href="https://quarkly.io/project/60e48e3b76068b001759f325/page/60e4930ab42a9a0018930a74"
				>
					view
				</Link>
			</Button>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			background="rgba(0, 0, 0, 0) linear-gradient(0deg,#5e0083 0%,rgba(0,0,0,1) 100%) 0% 0% /auto repeat scroll padding-box"
			display="block"
			overflow-y="visible"
			height="150px"
			width="100% border-box"
		>
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				instagram="https://instagram.com/rikhwanfatih"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					margin="0 8px"
					background="rgba(111, 131, 159, 0)"
					hover-background="--color-greyD1"
				/>
			</SocialMedia>
			<Section padding="60px 0" sm-padding="40px 0" flex="0 1 auto" display="block" />
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" background="--color-light">
			<Link
				href="rikhwanfatihfiardhi541@gmail.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
				font="16px --fontFamily-googlePoppins"
			>
				rikhwanfatihfiardhi541@gmail.com
			</Link>
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
			<style place={"endOfHead"} rawKey={"60e48e3b76068b001759f323"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});