import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App'
import { Navbar } from './components/Navbar'
import {createStore} from 'redux'
import reducer from './components/Redux/reducer'

const store = createStore(reducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
ReactDOM.render(<Navbar />, document.getElementById('navbar'))