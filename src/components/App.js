/**
|--------------------------------
|         DEPENDENCIAS
|--------------------------------
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
|--------------------------------
|         COMPONENTES
|--------------------------------
*/
import Header from './Header/';
import Footer from './Footer/';
import Content from './Content';
/**
|--------------------------------
|         ESTILOS
|--------------------------------
*/
import '../styles/App.css';
/**
|--------------------------------
|         DATOS
|--------------------------------
*/
import items from '../data/menu';
/**
|--------------------------------
|         MAIN
|--------------------------------
*/
class App extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <Header items={items}/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}
/**
|--------------------------------
|         PropTypes
|--------------------------------
*/
  App.PropTypes = {
    children: PropTypes.object.isRequired,
  };
/**
|--------------------------------
|         PropTypes
|--------------------------------
*/
export default App;
