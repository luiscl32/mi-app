import React, {Component} from 'react';
import {Button, FormGroup, FormControl, Col,Table} from 'react-bootstrap';

import '../../styles/body.css';

var index = -1 ;
var elementos = [];


class body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      valor: '',
      key: '',
      array: []
    };

    this.handleChange = this.handleChange.bind(this);
    this._saveChanges = this._saveChanges.bind(this);
  }

  handleChange(e){
    switch (e.target.id) {
      case 'nombre':
          this.setState({nombre: e.target.value});
        break;
      case 'valor':
          this.setState({valor: e.target.value});
        break;
      default:
        break;
    }
  }

  componentDidMount() {

  }

  _saveChanges(){
    this.setState({array: this.state.array.concat({nombre: this.state.nombre, valor: this.state.valor})});
    this.setState({nombre: '', valor: ''});
  }

  _deleteElement(id){
    console.log(id);
    this.setState({array:this.state.array.filter((_,_id) => _id !== id)});

  }

  render() {
    const Datos = this.state.array;

    return (
      <div className='Body'>
        <div className='Body-box'>
          <Col xs={6} md={6} lg={6}>
            <form >
              <FormGroup>
                <FormControl
                  id = 'nombre'
                  type = 'text'
                  placeholder = 'nombre'
                  value = {this.state.nombre}
                  onChange = {this.handleChange}
                />
                <FormControl
                  id = 'valor'
                  type = 'text'
                  placeholder = 'valor'
                  value = {this.state.valor}
                  onChange = {this.handleChange}
                />
                <Button bsStyle='danger' bsSize='large' block onClick={this._saveChanges}>Guardar</Button>
              </FormGroup>
            </form>
          </Col>
          <Col xs={6} md={6} lg={6}>

            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Valor</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {
                  Datos.map((inf,i) => (
                  <tr key={i}>
                      <td>{i}</td>
                      <td>{inf.nombre}</td>
                      <td>{inf.valor}</td>
                      <td><Button bsStyle='danger' onClick={() => this._deleteElement(i)}>x</Button></td>
                  </tr>
                ))
              }
              </tbody>
            </Table>
          </Col>
        </div>
      </div>
    );
  }
}

export default body;
