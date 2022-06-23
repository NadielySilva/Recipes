import React, {Component} from 'react';
//import { useMediaQuery } from 'react-responsive';
import { createGlobalStyle } from 'styled-components';

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

export default class App extends Component{


  render(){
    return(
      <>
        <GlobalStyle />
        <Header/>
        <Recipes/>
        <About/>
        <Subscribe/>
        <Footer/>
      </>
    )
  }
}