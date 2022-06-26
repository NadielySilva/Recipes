import React, {Component} from 'react';
//import { useMediaQuery } from 'react-responsive';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

//IMPORTING COMPONENTS
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import About from './Components/About';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

//IMPORTING ASSETS

//FONTS
// font-family: 'Roboto', sans-serif;

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background: #F2F4F1 0% 0% no-repeat padding-box;
`;

export default class App extends Component{


  render(){
    return(
      <>
        <GlobalStyle />
        <Container>
          <Header/>
          <Recipes/>
          <About/>
          <Subscribe/>
          <Footer/>
        </Container>
      </>
    )
  }
}