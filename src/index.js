import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux'

const  store=configureStore()
console.log(store)


ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
</Provider>
,document.getElementById('root')
);


