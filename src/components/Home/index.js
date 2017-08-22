/**
|--------------------------------
|         DEPENDENCIAS
|--------------------------------
*/
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
/**
|--------------------------------
|         DEPENDENCIAS NODE
|--------------------------------
*/
import {Button } from 'react-bootstrap';
/**
|--------------------------------
|         ESTILOS
|--------------------------------
*/
import '../../styles/Home.css';
/**
|--------------------------------
|         ASSETS
|--------------------------------
*/
import {comicsFetch} from '../../actions/';
import {connect} from 'react-redux';

class Home extends Component {
  /**
  |--------------------------------
  |         constructot
  |--------------------------------
  */
  constructor(props) {
    super(props);
    this.state = {};

  }
  /**
  |--------------------------------
  |         componentWillMount
  |         componentWillReceiveProps
  |--------------------------------
  */


  componentDidMount() {
          this.props.comicsFetch(2);
          console.log('props');
          console.log(this.props);
  }

  /**
  |--------------------------------
  |         _onClickComic
  |--------------------------------
  */
    _onClickComic(id){
      console.log('pressed:'+id);
    }
  /**
  |--------------------------------
  |         render
  |--------------------------------
  */
  render() {
    const historietas = this.props.comics;

    return (
      <div className='Div'>
          <div>
            <h1>Nuevos comics</h1>
{/**            <ul className='Home' >
              {
                historietas.map((data,key)=>(
                  <li key={key}>
                    <div className='Comics'>
                      <div className='Comic'>
                        <h5><span>{data.name}</span></h5>
                        <img src={data.thumbnail.path+'.jpg'} width={250} height={250}/>
                      </div>
                      <Link to={{pathname:`/AboutComic/${data.id}`, state:{name:data.name, description:data.description, series: data.series, stories: data.stories, image: data.thumbnail.path+'.jpg'}}}>
                        <Button bsStyle='primary' bsSize='large' block onClick={()=>this._onClickComic(data.id)}>ver mas</Button>
                      </Link>
                    </div>
                  </li>
                ))
              }
            </ul>*/}
          </div>
      </div>
    );
  }
}
/**
|--------------------------------
|         propTypes
|--------------------------------
*/
Home.propTypes = {

};
/**
|--------------------------------
|         redux
|--------------------------------
*/
const mapStateToProps = state => {
  return { comics: state.comics}
}

const mapdispatchToProps = dispatch => {
  return { comicsFetch: (id) => { dispatch(comicsFetch(id))}}
}
/**
|--------------------------------
|         export redux
|--------------------------------
*/
export default connect(mapStateToProps,mapdispatchToProps)(Home);
