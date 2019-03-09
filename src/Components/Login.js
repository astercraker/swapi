import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const LOGIN = gql`

    mutation Login($email:String!,$password:String!) {
        login(email:$email,password:$password){
            token
        }
    }

`

class Login extends Component{
    state = {
        email:"",
        password:""
    }

    catchInput = (event) => {
        const {name,value} = event.target
        console.log(name,value)
        this.setState({[name]: value})
    }

    catchData = (data) => {
        const {token} = data.login
        localStorage.setItem('swapi_token',token)
        this.props.history.push('/')
    }

    sendData = (event, login) => {
        event.preventDefault();
        login({variables:{...this.state}})
    }

    catchError = (error) => {
        console.log(error);
    }

    render(){
        return(
            <Mutation mutation={LOGIN}>
            {
                (login,{data,error,loading}) => {
                    if(error) this.catchError(error)
                    if(data) this.catchData(data)
                    return(
                       <form onSubmit={(event) => this.sendData(event,login)}>
                           <div className="form-group">
                           <label>Email:</label>
                           <input type="email" 
                           name="email"
                           className="form-control" 
                           placeholder="email" 
                           value={this.state.email}
                           onChange={this.catchInput}
                           />
                           
                           </div>

                           <div className="form-group">
                           <label>Password:</label>
                           <input type="password" 
                           name="password"
                           className="form-control"
                            placeholder="mipassword"
                            value={this.state.password}
                            onChange={this.catchInput} />
                           
                           </div>
                           <button type="submit" >Enviar</button>
                        </form>
                    )
                }
            }
            </Mutation>
        )
    }
}

export default Login;