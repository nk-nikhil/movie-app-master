import { ADD_FAV, ADD_MOVIES, Remove_FAV ,setFavourite} from "../actions";
const initialMovieState={
    list:[],
    favourites:[],
    showFav:false
}
export default function movies(state=initialMovieState,action){
   
    if(action.type===ADD_MOVIES){
        return {
            ...state,
            list:action.movies
        };
    }
    else if(action.type===ADD_FAV){
        
        return{
            ...state,favourites:[...state.favourites,action.movie]
        }
    }
    else if(action.type===Remove_FAV){
        console.log('unfavourite movie', action.movie);
        const filterArr = state.favourites.filter((movie)=>{
            return action.movie.Title!==movie.Title})
        return {
            ...state, favourites:filterArr
        }
    }
    else if(action.type===setFavourite){
        return {
            ...state,showFav:action.Value
        }
    }
    return state; 
} 