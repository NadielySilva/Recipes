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
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: no-repeat center / 98% 98% url(${myHeaderImage});
    background-origin: padding-box;
    background-clip: padding-box;
`;

const Logo = styled.h1`
    font-size: 3rem;
    width: 10vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 25px;
`;

const Menu = styled.div`
    width: 33vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px 25px;
    background-color: green;
    opacity: 0.45;
`;

export default function Header() {

    return (
        <>
            <GlobalStyle />
            <Container>
                <div>
                    <Logo>RC</Logo>
                </div>
                <Menu>
                    <button>About</button>
                    <button>Recipes</button>
                    <button>Subscribe</button>
                </Menu>
            </Container>
        </>
    )
}