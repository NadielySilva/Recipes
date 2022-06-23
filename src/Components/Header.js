import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//IMPORTING COMPONENTS
import myHeaderImage from "../Assets/Header_Image_2x.png"

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

const Container = styled.div`
    width: 100vw;
    height: 130vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const HeaderBackground = styled.img`
    width: 95vw;
    height: 120vh;
    object-fit: cover;
`;

export default function Header(){

    return(
        <>
            <GlobalStyle />
            <Container>
                <HeaderBackground src={myHeaderImage}/>
                <div>
                    <p>RC</p>
                </div>
                <div>
                    <button>About</button>
                    <button>Recipes</button>
                    <button>Subscribe</button>
                </div>
            </Container>
        </>
    )
}