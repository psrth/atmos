import { createGlobalStyle } from "styled-components";

const primaryColor = "#1da7ea";
const secondaryColor = "#000";

export const lightTheme = {
  body: primaryColor,
  fontColor: secondaryColor,
  cardColor: secondaryColor,
  cardFontColor: primaryColor,
};

export const darkTheme = {
  body: secondaryColor,
  fontColor: primaryColor,
  cardColor: primaryColor,
  cardFontColor: secondaryColor,
};

export const GlobalStyles = createGlobalStyle`
	body {
        background-color: ${(props) => props.theme.body};
    }
    .card{
        background-color: ${(props) => props.theme.cardColor};
        color: ${(props) => props.theme.cardFontColor};
    }
`;

