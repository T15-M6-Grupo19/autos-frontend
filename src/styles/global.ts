import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
		--colorFeedbackAlert1: #cd2b31;
		--colorFeedbackAlert2: #fdd8d8;
		--colorFeedbackAlert3: #ffe5e5;
		--colorFeedbackSucess1: #18794e;
		--colorFeedbackSucess2: #ccebd7;
		--colorFeedbackSucess3: #ddf3e4;
		--colorRandomRandom1: #e34d8c;
		--colorRandomRandom2: #c04277;
		--colorRandomRandom3: #7d2a4d;
		--colorRandomRandom4: #7000ff;
		--colorRandomRandom5: #6200e3;
		--colorRandomRandom6: #36007d;
		--colorRandomRandom7: #349974;
		--colorRandomRandom8: #2a7d5f;
		--colorRandomRandom9: #153d2e;
		--colorRandomRandom10: #6100ff;
		--colorRandomRandom11: #5700e3;
		--colorRandomRandom12: #30007d;
		--colorBrandBrand1: #4529e6;
		--colorBrandBrand2: #5126ea;
		--colorBrandBrand3: #b0a6f0;
		--colorBrandBrand4: #edeafd;
		--colorGreyScaleGrey0: #0b0d0d;
		--colorGreyScaleGrey1: #212529;
		--colorGreyScaleGrey2: #495057;
		--colorGreyScaleGrey3: #868e96;
		--colorGreyScaleGrey4: #adb5bd;
		--colorGreyScaleGrey5: #ced4da;
		--colorGreyScaleGrey6: #dee2e6;
		--colorGreyScaleGrey7: #e9ecef;
		--colorGreyScaleGrey8: #f1f3f5;
		--colorGreyScaleGrey9: #f8f9fa;
		--colorGreyScaleGrey10: #fdfdfd;
		--colorColorsFixedWhiteFixed: #ffffff;
	}

	.textStyleHeadingHeading1700 {
		font-size: 4.4rem;
		font-family: "Lexend";
		font-weight: 700;
		font-style: normal;
		line-height: 56px;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading2600 {
		font-size: 3.6rem;
		font-family: "Lexend";
		font-weight: 600;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading3500 {
		font-size: 3.2rem;
		font-family: "Lexend";
		font-weight: 500;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading3600 {
		font-size: 3.2rem;
		font-family: "Lexend";
		font-weight: 600;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading4600 {
		font-size: 2.8rem;
		font-family: "Lexend";
		font-weight: 600;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading4500 {
		font-size: 2.8rem;
		font-family: "Lexend";
		font-weight: 500;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading5500 {
		font-size: 2.4rem;
		font-family: "Lexend";
		font-weight: 500;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading5600 {
		font-size: 2.4rem;
		font-family: "Lexend";
		font-weight: 600;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading6500 {
		font-size: 2rem;
		font-family: "Lexend";
		font-weight: 500;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading6600 {
		font-size: 2rem;
		font-family: "Lexend";
		font-weight: 600;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading7500 {
		font-size: 1.6rem;
		font-family: "Lexend";
		font-weight: 500;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleHeadingHeading7600 {
		font-size: 1.6rem;
		font-family: "Lexend";
		font-weight: 600;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleInputsButtonsInputLabel {
		font-size: 1.4rem;
		font-family: "Inter";
		font-weight: 500;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleInputsButtonsInputPlaceholder {
		font-size: 1.6rem;
		font-family: "Inter";
		font-weight: 400;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleInputsButtonsButtonBigText {
		font-size: 1.6rem;
		font-family: "Inter";
		font-weight: 700;
		font-style: normal;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleTextBody1400 {
		font-size: 1.6rem;
		font-family: "Inter";
		font-weight: 400;
		font-style: normal;
		line-height: 28px;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleTextBody1600 {
		font-size: 1.6rem;
		font-family: "Inter";
		font-weight: 700;
		font-style: normal;
		line-height: 28px;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleTextBody2400 {
		font-size: 1.4rem;
		font-family: "Inter";
		font-weight: 400;
		font-style: normal;
		line-height: 24px;
		text-decoration: none;
		text-transform: none;
	}

	.textStyleTextBody2500 {
		font-size: 1.4rem;
		font-family: "Inter";
		font-weight: 500;
		font-style: normal;
		line-height: 24px;
		text-decoration: none;
		text-transform: none;
	}



    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        text-decoration: none;

    }

    button {
        cursor: pointer;
    }

    

`;
