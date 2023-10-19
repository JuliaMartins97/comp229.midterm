//this is my index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Multiple from "./components/addProduct/Multiple";
import ReactHookForm from "./components/SignUpUser/Example";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Multiple /> 
    <ReactHookForm />
  </React.StrictMode>,
)

//main.jsx doesn't need to be exported 

