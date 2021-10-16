import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

//1. import from react-redux and redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'


//2. create user reducer function
//{type:'LOGGED_In_USER', payload:{name:'Ryan', role:'Seller'}}
const authReducer = (state ={ name:'Ryan', role:'Seller'}, action) => {
  switch(action.type){
    case "LOGGED_IN_USER":
      return {...state, ...action.payload}
      case "LOGOUT":
        return action.payload;
        default:
          return state;

  }
};

//3. combine multipe reducers






//4. create redux store

const store = createStore(rootReducer, composeWithDevTools());


//5. provide redux store to the entire app

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
