import React, { Component } from 'react';
import payload from '../../payload';


const IS_AUTHENTICATED = () => localStorage.getItem("swapi_token") != null;

class Navbar extends Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Swapi</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {
                    IS_AUTHENTICATED() ? (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-a" href="#">Hola {payload().email} !!</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/people/1">People</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/planets/1">Planets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/users">Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/logout">Logout</a>
                            </li>
                        </ul>
                    ): ( <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-a" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/login">Login</a>
                            </li>
                        </ul>
                        )
                }
                    
                </div>
                </nav>
        )
    }
}

export default Navbar;