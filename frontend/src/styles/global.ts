import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color 0.4s;
        background:${props=>props.theme.colors.background};
        color:${props=>props.theme.colors.text};

    }
`;