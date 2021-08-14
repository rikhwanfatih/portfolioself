import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			background="--color-dark url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%20[D0374CF].gif?v=2021-07-31T08:27:34.953Z) 45% 0%/cover no-repeat"
			display="block"
			flex-direction="column"
			sm-background="--color-dark url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%20[D0374CF].gif?v=2021-07-31T08:27:34.953Z) 40% 0%/cover no-repeat"
			height="700px"
			sm-width="576px"
			sm-height="500px"
		>
			<Override slot="SectionContent" height="580px" max-height="none" sm-height="520px" />
			<Image
				width="1197.094285714286px"
				height="258.172px"
				src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/ezgif.com-gif-maker%20%286%29.gif?v=2021-07-27T09:37:03.171Z"
				position="absolute"
				bottom="auto"
				left="-162.71428571428578px"
				right="331.625px"
				top="200px"
				sm-left="-97px"
				sm-right="auto"
				sm-width="659.297px"
				sm-bottom="auto"
				sm-top="143px"
				sm-height="217.578px"
				object-fit="cover"
			/>
			<Box
				order="1"
				flex="0 1 auto"
				height="75px"
				width="750px"
				sm-height="300px"
				sm-margin="470px 0px 150px 0px"
				sm-width="324px"
				margin="400px 0px 0 0px"
				padding="0px 0px 60px 0px"
			>
				<Text
					color="#ffffff"
					font="normal 300 20px/80% poppins"
					letter-spacing="0.5px"
					sm-font="normal 200 12px/80% poppins"
					sm-position="absolute"
					sm-top="326px"
					sm-right="auto"
					sm-bottom="auto"
					sm-left="30px"
					sm-height="38.5px"
					sm-width="364.047px"
					margin="25px 0px 16px 0px"
					myDekstop-font="normal 400 20px/80% --fontFamily-googleSyne"
				>
					ENJOY MY SPECIAL ROOM, FOLLOW THE CURRENT{" "}
					<br />
					<br />
					AND DISCOVER THE MIRACLE WITHIN IT SO WE COLLABORATE.
				</Text>
			</Box>
			<SocialMedia
				facebook="https://www.facebook.com/rikhwan.fiardhi"
				twitter="https://twitter.com/Rfiardhi"
				display="flex"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				instagram="https://www.instagram.com/rikhwanfatih"
				pinterest="https://www.pinterest.com/rikhwanfatih"
				position="absolute"
				top="292px"
				right="60px"
				bottom="auto"
				left="auto"
				width="48.375px"
				height="179.41179591836735px"
				sm-bottom="auto"
				sm-left="23px"
				sm-right="auto"
				sm-top="410px"
				sm-height="34.16111494252871px"
				sm-width="143.594px"
				sm-position="absolute"
				icon-size="20px"
				border-color="#ffffff"
				sm-flex-direction="row"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px 10px 8px"
					sm-margin="0 0px 10px 0px"
					cursor="crosshair"
				/>
				<Override slot="icon" color="#c5c5c5" hover-color="#a646ff" />
				<Override slot="icon-facebook" color="#ffffff" />
				<Override slot="icon-instagram" color="#ffffff" />
				<Override slot="icon-twitter" color="#ffffff" />
				<Override slot="icon-pinterest" color="#ffffff" />
			</SocialMedia>
			<Components.Header>
				<Override slot="link" myDekstop-font="800 10px syne" />
				<Override slot="link3" myDekstop-font="800 10px syne" />
				<Override slot="link1" myDekstop-font="800 10px syne" />
				<Override slot="link2" myDekstop-font="800 10px syne" />
			</Components.Header>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			background="#000000 url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%2014%20Copy%20[12C2A09].png?v=2021-07-28T15:13:47.861Z) 0% 0%/cover"
			display="block"
			flex-direction="column"
			sm-background="--color-dark url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%2014%20Copy%20[12C2A09].png?v=2021-07-28T15:13:47.861Z) 40% 0%/cover no-repeat"
			height="1200px"
			sm-height="700px"
			sm-width="576px"
		>
			<Override slot="SectionContent" height="1080px" max-height="none" sm-height="625px" />
			<Text
				color="#ffffff"
				font="normal 500 28px/1.2 stretch pro"
				letter-spacing="0.5px"
				sm-font="normal 800 17px/80% --fontFamily-googlePoppins"
				sm-position="static"
				sm-top="570px"
				sm-right="auto"
				sm-bottom="847.875px"
				sm-left="30px"
				sm-height="20px"
				sm-width="300px"
				align-self="flex-start"
				order="1"
				margin="200px 80px 16px 0px"
				sm-margin="50px 0px 16px 0px"
				sm-letter-spacing="2px"
				sm-padding="20px 0px 0px 0px"
				myDekstop-font="normal 800 37px/1.2 --fontFamily-googleSyne"
			>
				Always be creative
			</Text>
			<Text
				color="#ffffff"
				font="normal 300 20px/1.5 poppins"
				letter-spacing="0.5px"
				sm-font="normal 100 12px/130% poppins"
				sm-position="static"
				sm-top="455px"
				sm-right="30px"
				sm-bottom="auto"
				sm-left="auto"
				sm-height="70px"
				sm-width="518px"
				align-self="flex-end"
				margin="10px 0px 16px 400px"
				text-align="left"
				padding="0px 0px 0px 85px"
				sm-padding="0px 0px 0px 200px"
				sm-margin="10px 0px 16px 0"
				sm-text-align="right"
				myDekstop-font="normal 800 35px/1.5 --fontFamily-googleSyne"
				myDekstop-margin="10px 0px 16px 0"
				myDekstop-width="675px"
			>
				Hello, as we say here
			</Text>
			<Text
				color="#ffffff"
				font="normal 300 20px/1.5 poppins"
				letter-spacing="0.5px"
				sm-font="normal 100 12px/130% poppins"
				sm-position="static"
				sm-top="455px"
				sm-right="30px"
				sm-bottom="auto"
				sm-left="auto"
				sm-height="70px"
				sm-width="518px"
				align-self="flex-end"
				margin="10px 0px 16px 400px"
				text-align="left"
				padding="0px 0px 0px 85px"
				sm-padding="0px 0px 0px 200px"
				sm-margin="10px 0px 16px 0"
				sm-text-align="right"
				myDekstop-font="normal 400 20px/1.5 --fontFamily-googleSyne"
				myDekstop-margin="10px 0px 16px 0"
				myDekstop-width="675px"
			>
				MY NAME IS RIKHWAN FATIH FIARDHI. I'M A 20 YEAR-OLD INDONESIA DESIGNER BASED IN INDONESIA. I'M AVAILABLE FOR PROJECTS, COLLABORATIONS AND EXPERIMENTS.
			</Text>
			<Text
				color="#ffffff"
				font="normal 300 20px/1.5 poppins"
				letter-spacing="0.5px"
				sm-font="normal 100 12px/130% poppins"
				sm-position="static"
				sm-top="579px"
				sm-right="auto"
				sm-bottom="auto"
				sm-left="30px"
				sm-height="60px"
				sm-width="300px"
				align-self="flex-start"
				text-align="left"
				order="1"
				margin="16px 400px 16px 0px"
				myDekstop-font="normal 300 20px/1.5 --fontFamily-googleSyne"
				myDekstop-width="600px"
			>
				BEING PRINCIPLE, FOLLOWING EFFORT WITH YOUR SOFT SKILL PRACTICE AND PATIENCE AS THE KEY, I BELIEVE YOU WILL SUCCEED WITH ALL OF IT.
			</Text>
			<Text
				order="1"
				color="#ffffff"
				font="92px stretch pro"
				text-align="left"
				sm-font="900 52px --fontFamily-googleLexendMega"
				cursor="crosshair"
				margin="180px 0px 16px 0px"
			>
				<Link
					href="/work"
					text-decoration-line="initial"
					color="#ffffff"
					hover-opacity="1"
					hover-color="#633497"
					hover-mix-blend-mode="difference"
					hover-text-shadow="3px 5px 20px #000000"
					sm-font="1000 52px --fontFamily-googlePoppins"
					sm-letter-spacing="5px"
					cursor="crosshair"
					myDekstop-transition="--transition05"
					myDekstop-font="800 110px --fontFamily-googleSyne"
				>
					WORK
				</Link>
			</Text>
			<Text
				order="1"
				color="#ffffff"
				font="92px stretch pro"
				text-align="right"
				sm-font="900 52px --fontFamily-googleLexendMega"
				cursor="crosshair"
			>
				<Link
					href="/uses"
					text-decoration-line="initial"
					color="#ffffff"
					hover-opacity="1"
					hover-color="#633497"
					hover-mix-blend-mode="difference"
					hover-text-shadow="3px 5px 20px #000000"
					sm-font="1000 52px --fontFamily-googlePoppins"
					sm-letter-spacing="5px"
					cursor="crosshair"
					myDekstop-transition="--transition05"
					myDekstop-font="800 110px --fontFamily-googleSyne"
				>
					USES
				</Link>
			</Text>
			<Text
				order="1"
				color="#ffffff"
				font="92px stretch pro"
				sm-font="900 52px --fontFamily-googlePoppins"
				cursor="crosshair"
			>
				<Link
					href="/about"
					text-decoration-line="initial"
					color="#ffffff"
					hover-opacity="1"
					hover-color="#633497"
					hover-mix-blend-mode="difference"
					hover-text-shadow="3px 0 20px #000000"
					sm-font="1000 52px --fontFamily-googlePoppins"
					sm-letter-spacing="5px"
					cursor="crosshair"
					myDekstop-transition="--transition05"
					myDekstop-font="800 110px --fontFamily-googleSyne"
				>
					ABOUT
				</Link>
			</Text>
			<Text
				color="#ffffff"
				font="normal 800 20px/1.5 poppins"
				letter-spacing="0.5px"
				sm-font="normal 800 8px/80% poppins"
				sm-position="absolute"
				sm-top="auto"
				sm-right="auto"
				sm-bottom="513px"
				sm-left="27px"
				sm-height="25.4219px"
				sm-width="60.8594px"
				align-self="flex-start"
				text-align="left"
				order="1"
				margin="16px 400px 16px 0px"
				bottom="769px"
				height="41.64483636363636px"
				position="absolute"
				top="auto"
				left="56px"
				right="auto"
				width="121.67354545454545px"
				hover-color="#a365ff"
				sm-margin="16px 0 16px 0px"
				myDekstop-bottom="737.8181818181819px"
				myDekstop-left="60px"
				myDekstop-right="714.4235454545455px"
				myDekstop-top="1372.19px"
				myDekstop-font="normal 800 20px/1.5 --fontFamily-googleSyne"
				myDekstop-width="172.57645454545454px"
				myDekstop-height="57.99431818181818px"
			>
				LETS GO ↘
			</Text>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			background="#000000 url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%20[D0374CF].gif?v=2021-07-31T08:27:34.953Z) 0% 0%/cover repeat fixed"
			sm-height="250px"
			quarkly-title="Footer"
			height="300px"
			sm-width="576px"
			sm-background="#000000 url(https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/New%20Project%20[D0374CF].gif?v=2021-07-31T08:27:34.953Z) 0% 0%/cover repeat fixed"
		>
			<Override
				slot="SectionContent"
				flex="1 1 0%"
				display="flex"
				sm-max-width="525px"
				width="1152px"
				height="auto"
				max-width="1152px"
				myDekstop-max-width="1212.3px"
				myDekstop-width="1212.3px"
				xxl-width="1229.39px"
				xxl-max-width="1229.39px"
			/>
			<Components.Footer>
				<Override
					slot="box"
					width="1152px"
					myDekstop-width="1212.3px"
					xxl-width="1229.39px"
					myDekstop-grid-template-columns="130px 180px 170px 170px"
				/>
			</Components.Footer>
			<Image
				width="375.1581111111111px"
				height="352.984px"
				src="https://uploads.quarkly.io/60eda14c76068b001759f9a9/images/ezgif.com-gif-maker%20%288%29.gif?v=2021-07-27T10:47:28.199Z"
				position="absolute"
				bottom="auto"
				left="91px"
				right="auto"
				top="737px"
				sm-bottom="513px"
				sm-height="222.812px"
				sm-left="auto"
				sm-right="16px"
				sm-top="auto"
				sm-width="218.188px"
				sm-position="absolute"
				myDekstop-bottom="708px"
				myDekstop-height="506.969px"
				myDekstop-left="738.859px"
				myDekstop-right="73px"
				myDekstop-top="1000px"
				myDekstop-width="535.141px"
			/>
		</Section>
		<Components.QuarklycommunityKitScrollIndicator background="rgba(124, 0, 255, 0.7)" sm-z-index="1000" myDekstop-overflow-y="hidden" />
		<Components.QuarklycommunityKitBackToTop showAlways={false} easingPreset="linear">
			<Override slot="Icon" category="fi" color="#8205e4" />
			<Override
				slot="Button"
				background="--color-indigo"
				disabled={false}
				border-color="transparent"
				hover-cursor="crosshair"
				cursor="crosshair"
				myDekstop-margin="0px 640px 0px 0px"
				margin="0px 610px 0px 0px"
			/>
			<Override slot="Wrapper" />
		</Components.QuarklycommunityKitBackToTop>
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