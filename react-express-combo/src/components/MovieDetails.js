import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const posterurl = 'http://image.tmdb.org/t/p/original';
const backdrop = 'https://image.tmdb.org/t/p/original';

 class MovieDetails extends Component {

  state = {
    name : null,
    poster: null,
    background: null,
    overview: null,
    runtime: null,
    vote_average: null,
    vote_count: null,
    release_date: null,
    budget:null,
    revenue:null,
  }
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=54a91f8f6f10791019cbee06394e04a8&language=en-US`)
      .then(res => {
      
        
      
        this.setState({ 
          name : res.data.title ,
          poster : res.data.poster_path,
          background : res.data.backdrop_path,
          overview : res.data.overview,
          runtime: res.data.runtime,
          vote_average: res.data.vote_average,
          vote_count: res.data.vote_count,
          budget: res.data.budget,
          revenue: res.data.revenue,

         });
      })
  }


  render() {
    return (
      <div className="movie-background" >
      
       
       <img  className="background-image" src={(`${backdrop + this.state.background}`)}></img>
       <Container className="movie-container">
        <Row>
           <Col ><img src={(`${posterurl + this.state.poster}`)} height='600'/></Col>
           <Col >
           <Row >{this.state.name}</Row>
           <Row >Rare</Row>
           <Row >By Selena Gomez</Row>
           <Row >2019 ⚬ 10 songs,42 min</Row>
           <Row>
               <Col>Pause</Col>
               <Col >hhhhhh</Col>
               <Col >dsgfhgjfgdfsgfdsfg</Col>
           </Row>
           
           </Col>
       </Row>
       
        </Container>
      
       
      </div>
    )
  }
}



  export default MovieDetails