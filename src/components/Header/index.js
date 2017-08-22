/**
|--------------------------------
|         DEPENDENCIAS
|--------------------------------
*/
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
/**
|--------------------------------
|          ESTILOS
|--------------------------------
*/
import '../../styles/App.css';
import '../../styles/menu.css';
/**
|--------------------------------
|         MAIN
|--------------------------------
*/
class header extends Component {
  /**
  |--------------------------------
  |         RENDER
  |--------------------------------
  */
  render() {
    const { items } = this.props;
    return (
      <div className="App-header">
          <h1>SI SITIO</h1>
          <ul  className='Menu'>
            {
              items.map((item,key)=>(
                <li key={key}><Link to={item.url}>{item.title}</Link></li>
              ))
            }
          </ul>
      </div>
    );
  }
}
/**
|--------------------------------
|         PropTypes
|--------------------------------
*/
  header.propTypes = {
    items: PropTypes.array.isRequired,
  };
/**
|--------------------------------
|         REDUX
|--------------------------------
*/
export default header;
