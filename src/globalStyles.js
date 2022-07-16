import styled, {createGlobalStyle} from 'styled-components';
import { MENU_HEIGHT } from './constants/styles';

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before{
        box-sizing: border-box;
        
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Lato";
    }
`;

export const PageTitle = styled.h1`
    font-size: 2.8em;
    color: #222;
    font-weight: 300;
    text-align: center;


`

export const SubTitle = styled.p`
    color: #CCC;
    font-size: 1.0em;
    text-transform: capitalize;
    margin: 0;
    margin-top: 3px;

`;

// Form styles

export const FormControl = styled.div`
    width: 100%;
    margin: 5px 0;
    border-radius: 6px;
    background-color: #F2F2F2;
    padding: 5px 10px;
    display: flex;
    label{
        display: block;
        font-size: 0% .95em;
        color: #222;
        font-weight: 500;
    }
        
`;

export const FormControlInput = styled.div`
    flex: 1;

    input[type="email"], input[type="password"], input[type="text"], select, input[type="number"]{
        display: block;
        width: 100%;
        font-size: 1.1em;
        padding: 5px 10px;
        margin: 0px;
        background-color: transparent;
        border: none;
        outline: none;
    }
    .radio:hover{
        display: flex;
    }
    span {
        color: red;
        font-size: 0.85em;
    }
    

`;

export const FromControlAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TermsForm = styled.div`
    width: 100%;
    margin: 5px 0;
    border-radius: 6px;
    background-color: #F2F2F2;
    padding: 10px 10px;
    font-size: 1em;
    input[type="checkbox"] {
        border-radius: 5px;
        cursor: pointer;
        height: 15px;
        width: 15px;
        background-color: #F2F2F2;
        margin-right: 15px;
    }

`;

export const FooterFixed = styled.footer`
    position: fixed;
    bottom: ${MENU_HEIGHT + 5}px;
    left: 0;
    width: 100%;

`