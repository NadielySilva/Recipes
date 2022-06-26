import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

//IMPORTING ASSETS
import myInstagramIcon from "../Assets/Instagram_Icon.svg"
import myTwitterIcon from "../Assets/Twitter_Icon.svg"
import myFacebookIcon from "../Assets/Facebook_Icon.svg"
import myPinterestIcon from "../Assets/Pinterest_Icon.svg"

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

const Container = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
`;

const ContactInfo = styled.div`
    width: 100vw;
    height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SocialMedia = styled.div`
    width: 25vw;
    height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const SocialMediaIcon = styled.img`
    width: 3vw;
    height: 25vh;
    object-fit: contain;
`;

const Menu = styled.div`
    width: 35vw;
    height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const MenuItem = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    color: #373737;
`;

const Disclaimer = styled.div`
    width: 100vw;
    height: 5vh;
    background: #446061 0% 0% no-repeat padding-box;
`;

const DisclaimerText = styled.p`
    font: normal normal normal Roboto;
    font-size: 10px;
    text-align: center;
    line-height: 5vh;
    letter-spacing: 1.25px;
    color: #FFFFFF;
`;

const LinkStyle = styled.a`
    text-decoration: none;
    color: #FFFFFF;
`;

export default function Footer(){

    return(
        <>
            <GlobalStyle />
            <Container>
                <ContactInfo>
                    <SocialMedia>
                        <a href="#"><SocialMediaIcon src={myInstagramIcon} alt="Icone Instagram"/></a>
                        <a href="#"><SocialMediaIcon src={myTwitterIcon} alt="Icone Twitter"/></a>
                        <a href="#"><SocialMediaIcon src={myFacebookIcon} alt="Icone Facebook"/></a>
                        <a href="#"><SocialMediaIcon src={myPinterestIcon} alt="Icone Pinterest"/></a>
                    </SocialMedia>
                    <Menu>
                        <MenuItem href="#">About</MenuItem>
                        <MenuItem href="#">Recipes</MenuItem>
                        <MenuItem href="#">Subscribe</MenuItem>
                    </Menu>
                </ContactInfo>
                <Disclaimer>
                    <DisclaimerText>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: <LinkStyle href="https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/">https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</LinkStyle></DisclaimerText>
                </Disclaimer>
            </Container>
        </>
    )
}