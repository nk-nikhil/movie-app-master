
import React from 'react';
import Navbar  from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addmovies,addfav, setFav } from '../actions';



class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch action
    const {store} = this.props;
    store.subscribe(
      ()=>{
      
        this.forceUpdate();
        //force update is not good idea
        console.log('updated')
      }
    )
    //store.dispatch(action creater)
    store.dispatch(addmovies(data))
  }
  isMovieFavourite=(movie)=>{
    const {favourites} = this.props.store.getState();
    const index= favourites.indexOf(movie);
    if(index!==-1){
      //found movie
      //if not present ,gives -1
      return true;
    }
    return false;
  }
  handlefav=(movie)=>{
    console.log(movie)
    this.props.dispatch(addfav(movie))
  }
  handleUnfav=(movie)=>{
    console.log(movie)
    this.props.dispatch((movie))
  }
  onChangeTab = (value)=>{
    this.props.store.dispatch(setFav(value))
  }
  render(){
    const {list,favourites,setFav} = this.props.store.getState();
  //{list:[],fav:[]}
   const display= setFav ? favourites:list;
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${setFav ? '' : 'active-tabs' }`} onClick={()=>this.onChangeTab(false)} >Movies</div>
          <div className={`tab ${setFav ? 'active-tabs':'' }`} onClick={()=>this.onChangeTab(true)} >Favourites</div>
        </div>
        
        <div className="list">
         
        {
        
          display.map((movie,index)=>
          {
            return <
              MovieCard 
              movie={movie}
               key={`movies-${index}`} 
              
               dispatch={this.props.store.dispatch}
               isFavourite={this.isMovieFavourite}/>
          }) 
        }
        </div>
        {display.length===0 ? <div className="no-movies">No Movies to Display</div>:null}
      </div>
      
    </div>
  );
      
      
}
}


export default App;
