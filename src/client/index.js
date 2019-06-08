import React from "react";
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login'

function renderLogin({id = 'root', onLoginSuccess}) {
  ReactDom.render(<Login onLoginSuccess={onLoginSuccess} />,document.getElementById(id));
}

export {
  renderLogin,
};