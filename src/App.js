import React from 'react';
import Revolution from './router';
import { Provider } from 'react-redux';
import store from './store/index.js'
import './App.css';

function App() {
  return (
    <div>
    	<Provider store={store}>
      		<Revolution />
      	</Provider>
    </div>
  );
}

export default App;
