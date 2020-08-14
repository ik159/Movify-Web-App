import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import MovieDetails from './MovieDetails';


const posterurl = 'http://image.tmdb.org/t/p/w185';

export default class NowPlaying extends React.Component {
  state = {
    rommovieapi: []
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=54a91f8f6f10791019cbee06394e04a8`)
      .then(res => {
        const rommovieapi = res.data.results;
        this.setState({ rommovieapi });
      })
  }


  
  render() {
    return (
      <div className='rom'>
        

          {this.state.rommovieapi.map(rommovie =>
            <a href={'/moviedetails/' + rommovie.id} >
              <Container >
            <Col>
              <Row>
                <img src={(`${posterurl + rommovie.poster_path}`)} />
              </Row>
              <Row className='movietitle'>
                {rommovie.title}
              </Row>
            </Col>
            
            </Container>
            </a>
          )}
        

      </div>
    )
  }
}