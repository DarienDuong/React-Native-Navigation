import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
// import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
// import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyBGG3LRuAuaEVoE70igVNw1M4djbgihD_0',
      authDomain: 'first-auth-82fc0.firebaseapp.com',
      databaseURL: 'https://first-auth-82fc0.firebaseio.com',
      projectId: 'first-auth-82fc0',
      storageBucket: 'first-auth-82fc0.appspot.com',
      messagingSenderId: '59464127918'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
