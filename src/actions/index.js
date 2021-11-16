/*
 actions:
 {
     type:'ADD_MOVIES',
     movies
 }

*/
//actions 
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAV='ADD_FAV';
export const Remove_FAV='REMOVE_FAV';
export const setFavourite='setFavorite';

//action creaters
export function addmovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}
export function addfav(movie){
    return{
        type:ADD_FAV,
        movie
    }
}
export function removeFav(movie){
    return{
        type:Remove_FAV,
        movie
    }
}
export function setFav(Value){
    return{
        type:setFavourite,
        Value
    }
}