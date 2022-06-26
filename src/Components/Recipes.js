import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//IMPORTING ASSETS
import myRedVelvet from "../Assets/Red_Velvet@2x.png"
import myPizza from "../Assets/Pizza@2x.png"
import mySmoothie from "../Assets/Peanut_Smoothie@2x.png"

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
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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

const CardContainer = styled.div`
    width: 90vw;
    height: 60vh;
    display: flex;
    justify-content: space-evenly;
`;

const Card = styled.div`
    width: 27vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 7px 6px #00000029;
    background: #FFFFFF 0% 0% no-repeat padding-box;
`;

const CardStroke = styled(Stroke)`
    width: 3vw;
`;

const DishTitleBox = styled.div`
    width: 27vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const DishTitle = styled.p`
    font-size: 18px;
    text-align: center;
    color: #373737;
`;

const DishImg = styled.img`
    width: 27vw;
    height: 30vh;
    object-fit: cover;
`;

export default function Recipes(){

    return(
        <>
            <GlobalStyle />
            <Container>
                <Title>Latest Recipes</Title>
                <Stroke></Stroke>
                <CardContainer>
                    <Card>
                        <DishImg src={myRedVelvet} alt="Pedaço triangular de bolo red velvet com recheio e cobertura branca, salpicado com um pó vermelho e uma cereja em cima. está servido em um prato branco e um pedaço foi tirado com um garfo também posicionado no prato."/>
                        <DishTitleBox>
                            <CardStroke></CardStroke>
                            <DishTitle>Red Velvet Cake</DishTitle>
                        </DishTitleBox>
                    </Card>
                    <Card>
                        <DishImg src={myPizza} alt="Pizza marguerita com bastante queijo e com tomates-cereja e folhas de manjericão em cima."/>
                        <DishTitleBox>
                            <CardStroke></CardStroke>
                            <DishTitle>Marguerita Pizza</DishTitle>
                        </DishTitleBox>
                    </Card>
                    <Card>
                        <DishImg src={mySmoothie} alt="Em uma superfície clara tem-se dois copos de smoothie de pasta de amendoin postos um um atrás do outro. Em primeiro plano tem-se uma colher com pasta de amendoin."/>
                        <DishTitleBox>
                            <CardStroke></CardStroke>
                            <DishTitle>Peanut Smoothie</DishTitle>
                        </DishTitleBox>
                    </Card>
                </CardContainer>
            </Container>
        </>
    )
}