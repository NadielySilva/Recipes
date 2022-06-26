import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

const Container = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: #DFE4DE;
`;

const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    height: 8vh;
`;

const Subtitle = styled.p`

`;

const EmailInput = styled.input`
    width: 41vw;
    height: 11vh;
    border: none;
    background: #EFF1EE;
`;

const SecondaryBtn = styled.button`
    text-transform: uppercase;
    width: 90px;
    height: 30px;
    border: 3px solid ##373737;
    background-color: transparent;

    :hover{
        cursor:pointer;
    }
`;

export default function Subscribe(){

    return(
        <>
            <GlobalStyle />
            <Container>
                <Title>Subscribe</Title>
                <Subtitle>Sign up for newsletter</Subtitle>
                <EmailInput placeholder="Your Email"/>
                <SecondaryBtn>Submit</SecondaryBtn>
            </Container>
        </>
    )
}