import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import movies from './reducers'
const store=createStore(movies);
/* console.log('store',store)
console.log('before state',store.getState())
store.dispatch({
    type:'ADD_MOVIES',
    movies: [{name:'superman'}]

});
console.log('after state',store.getState()) */
ReactDOM.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


