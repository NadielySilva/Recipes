import React, {Component} from 'react';


//IMPORTING COMPONENTS
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import About from './Components/About';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

export default class App extends Component{

  render(){
    return(
      <>
        <Header/>
        <Recipes/>
        <About/>
        <Subscribe/>
        <Footer/>
      </>
    )
  }
}