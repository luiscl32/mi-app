/**
|--------------------------------
|         DEPENDENCIAS
|--------------------------------
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
/**
|--------------------------------
|         DEPENDENCIAS NODE
|--------------------------------
*/
import {Button,Col,FormGroup, FormControl} from 'react-bootstrap';
/**
|--------------------------------
|         ESTILOS
|--------------------------------
*/
import '../../styles/footer.css';
/**
|--------------------------------
|         MAIN
|--------------------------------
*/
class footer extends Component {
  /**
  |--------------------------------
  |         CONSTRUCTOR
  |--------------------------------
  */
  constructor(props) {
    super(props);
    this.state = {
      correo: ''
    };
  }
  /**
  |--------------------------------
  |         RENDER
  |--------------------------------
  */
  render() {
    return (
      <div className='Footer'>
        <div className='Footer-box'>
          {
            /**
            |---------------------------------
            |         contacto
            |---------------------------------
            */
          }
          <Col  xs={6} md={6} lg={6}>
            <div className='Footer-col'>
              <h3 className='Footer-title'>Sobre nosotros</h3>
              <h5>telefono: 0424-722-1998</h5>
              <h5>correo: luiscl32@gmail.com</h5>
            </div>
          </Col>
          {
            /**
            |---------------------------------
            |         registro
            |---------------------------------
            */
          }
          <Col  xs={6} md={6} lg={6}>
            <div className='Footer-col'>
              <h2 className='Footer-title'>Quieres saber mas</h2>
              <p>ingresa tu correo y obten nuevas noticias de nuestro sitio</p>
            </div>
            <div>
              <form>
                <FormGroup>
                  <FormControl
                    type ='text'
                    placeholder = 'Ingresa tu correo'
                    value = {this.state.correo}
                    onChange = {this.handleChange}
                  />
                  <br/>
                  <Button bsStyle='primary' bsSize='large' block>Enviar</Button>
                </FormGroup>
              </form>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}

export default footer;
