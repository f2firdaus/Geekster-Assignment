import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import defaultReducer from './slice';


const statestore = configureStore({
  reducer:defaultReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={statestore}>
<App />
</Provider>
   
 
);

