import React from 'react';
import { addfav,removeFav } from '../actions';


class MovieCard extends React.Component{
   
  handleFav=()=>{
      const {movie} = this.props;
      this.props.dispatch(addfav(movie));
  }
  handleunFav=()=>{
      const {movie}= this.props;
      this.props.dispatch(removeFav(movie))
  }
    render(){
        const { movie,isFavourite }= this.props;
      
      
        return(
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="" />

                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">
                            {movie.imdbRating}
                        </div>
                        {   isFavourite(movie) ?
                            <button className="unfavourite-btn" onClick={this.handleunFav }>UnFavourite</button>:
                            <button className="favourite-btn" onClick={this.handleFav }>Favourite</button>
                        }
                         
                    </div>
                    

                </div>
            </div>
        );
    }
}
export default MovieCard;