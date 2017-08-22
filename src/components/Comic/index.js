import React, { Component, } from 'react';
import {propTypes} from 'prop-types'

import {Col,Grid,Row} from 'react-bootstrap';

import '../../styles/Comic.css';

class Comic extends Component {
  constructor(props){
  	super(props);
    console.log(props);
  	this.state = {
      name: this.props.location.state.name,
      description: this.props.location.state.description,
      series: this.props.location.state.series,
      stories: this.props.location.state.stories,
      image: this.props.location.state.image,
    };

  }

  render() {
    return (
      <div className='Comic'>
        <img src={this.state.image} width={400} height={250}/>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <Grid>
          <Row>
            <Col xs={6}>
              <div>
                <h1>Historietas</h1>
                <ul className={Comic}>
                  {
                    this.state.stories.items.map((data,key)=>(
                      <li key={key}>{data.name}</li>
                    ))
                  }
                </ul>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <h1>Series</h1>
                <ul className={Comic}>
                  {
                    this.state.series.items.map((data,key)=>(
                      <li key={key}>{data.name}</li>
                    ))
                  }
                </ul>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Comic.propTypes = {

};

export default Comic;
