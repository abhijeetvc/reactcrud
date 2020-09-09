import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

class AddUserComponent extends Component{
       constructor(){
            super()
            this.state={
                firstName:"",
                lastName:"",
                username:"",
                password:"",
                city:"",
                salary:"",
                message:""
            }
       }

       onChange=event=>{
           this.setState({[event.target.name]:event.target.value})
       }

       saveUser=e=>{
           e.preventDefault()
           let user={
               firstName:this.state.firstName,
               lastName:this.state.lastName,
               username:this.state.username,
               password:this.state.password,
               city:this.state.city,
               salary:this.state.salary
           }
           ApiService.addUser(user)
                    .then(response=>{
                        this.setState({message:"User added successfully"})
                        this.props.history.push("/getAllUsers")
                    })
       }
       render(){
           return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                    <div className="form-group">
                        <label>FirstName:</label>
                        <input type="text" 
                                placeholder="firstname" 
                                name="firstName"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>LastName:</label>
                        <input type="text" 
                                placeholder="lastname" 
                                name="lastName"
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>UserName:</label>
                        <input type="text" 
                                placeholder="username" 
                                name="username"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" 
                                placeholder="password" 
                                name="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>City:</label>
                        <input type="text" 
                                placeholder="city" 
                                name="city"
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Salary:</label>
                        <input type="number" 
                                placeholder="salary" 
                                name="salary"
                                className="form-control"
                                value={this.state.salary}
                                onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
           )
       }
}

export default AddUserComponent