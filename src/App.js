import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import client from './Graphql'
import './App.css';
import {Navbar} from './Common/Navbar';
import CharacterList from './Components/CharacterList';
import PlanetList from './Components/PlanetList';
import Login from './Components/Login';
import ListUsers from './Components/ListUsers'

const IS_AUTHENTICATED = () => localStorage.getItem("swapi_token") != null;

const Logout = () => {
  localStorage.removeItem("swapi_token");
  return(
    <Redirect to="/"/>
  )
}

const PrivateRoute = ({component: Component,...rest}) => (
  <Route {...rest} render = {
    (props) => (
      IS_AUTHENTICATED() ? <Component {...props} />: <Redirect to="login"/>
    )
    }></Route>
)

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        
        <Router>
          <React.Fragment>
          <Navbar />
          <Route exact path="/" component={() => (<h2>Bienvenido a react swapi !</h2>)}></Route>
          <PrivateRoute exact path="/people/:page" component={CharacterList}></PrivateRoute>
          <PrivateRoute exact path="/planets/:page" component={PlanetList}></PrivateRoute>
          <Route exact path="/login" component={Login} ></Route>
          <PrivateRoute exact path="/logout" component={Logout} ></PrivateRoute>
          <PrivateRoute exact path="/users" component={ListUsers}></PrivateRoute>
          </React.Fragment>
          
        </Router>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
