import React, { Component } from 'react'
import {Switch,Redirect,Route} from "react-router-dom";
import {
  Home,
  Books,
  Cart,
  Mine,
  Classify
} from "@pages"
import Layout from "@layout"

class App extends Component {
  render() {
    return (
      <Switch>
          <Redirect from="/" to="/home" exact/>
          <Layout>
            <Route path="/home" component={Home}/>
            <Route path="/books" component={Books}/>
            <Route path="/classify" component={Classify}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/mine" component={Mine}/>
          </Layout>
          
          
      </Switch>
    )
  }
}
export default App;