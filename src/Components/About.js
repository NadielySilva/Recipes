import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

//IMPORTING ASSETS
import mySpoon from "../Assets/Colher_Sal_Grosso@2x.png"

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
`;

const AboutImg = styled.img`
    width: 50vw;
    height: 80vh;
    object-fit: cover;
`;

const AboutContainer = styled.div`
    width: 50vw;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    height: 8vh;
`;

const Stroke = styled.div`
    width: 5vw;
    height: 3px;
    border-radius: 3px;
    background-color: #373737;
`;

const AboutDescription = styled.p`
    font-size: 16px;
    text-align: left;
    line-height: 150%;
    width: 40vw;
    height: 50vh;
`;

export default function About(){

    return(
        <Container>
            <GlobalStyle />
            
                <AboutImg src={mySpoon} alt="Uma colher de metal escuro com detalhes entalhados na ponta do cabo contendo sal grosso."/>
                <AboutContainer>
                    <Title>About</Title>
                    <Stroke></Stroke>
                    <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</AboutDescription>
                </AboutContainer>
        </Container>
    )
}