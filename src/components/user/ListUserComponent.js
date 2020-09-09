import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

class ListUserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            message:null
        }
    }

    componentDidMount(){
        
    }

    addUser(){
        window.localStorage.removeItem("userId")
        this.props.history.push("/add-user")
    }

    editUser(){

    }

    deleteUser(){

    }

    render(){
        return(
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" style={{width:'120px'}} onClick={()=>this.addUser()}>Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>City</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            this.state.users.map(
                                user=>
                                    <tr key={user.id}>
                                        <td>{user.fiestName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.city}</td>
                                        <td>{user.salary}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=> this.editUser(user.id)}>Edit</button>
                                            <button className="btn btn-success" onClick={()=> this.deleteUser(user.id)}>Delete</button>

                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListUserComponent