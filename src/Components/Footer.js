import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "react";


export default function Footer(){

    return(
        <>
            <GlobalStyle />
            <Container>
                <ContactInfo>
                    <SocialMedia>
                        <SocialMediaIcon src={myInstagramIcon} alt=""/>
                        <SocialMediaIcon src={myTwitterIcon} alt=""/>
                        <SocialMediaIcon src={myFacebookIcon} alt=""/>
                        <SocialMediaIcon src={myPinterestIcon} alt=""/>
                    </SocialMedia>
                    <Menu>
                        <MenuItem href="#">About</MenuItem>
                        <MenuItem href="#">Recipes</MenuItem>
                        <MenuItem href="#">Subscribe</MenuItem>
                    </Menu>
                </ContactInfo>
                <Disclaimer>
                    <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: <a href="https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/">https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</a></p>
                </Disclaimer>
            </Container>
        </>
    )
}