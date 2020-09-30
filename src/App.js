import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import Form from "./Form";
import Submit from "./Submit";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form}/>
      <Route exact path="/submit" component={Submit}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
