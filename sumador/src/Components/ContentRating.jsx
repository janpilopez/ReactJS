
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    //OBJETO ESTADO INICIALIZANDO LOS VALORES
    this.state = {
        likes: 0,
        dislikes: 0,
        //manejadores de eventos 
        handleLike:() => {
            this.setState( (prevState) => ({
                likes: parseInt(prevState.likes)+1
            } ));
        },
        handleDislike:() => {
            this.setState( prevState => ({
                dislikes: parseInt(prevState.dislikes)+1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
            Hola mucho gusto,
            esto es una prueba si te gusta
            like si no dislike xd
        </p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike} >
                Like ( {this.state.likes} )
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ( {this.state.dislikes} )
            </button> 
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
