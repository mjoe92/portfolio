import { Component } from "react";
import { User } from "../../interface/User";
import UserService from "../../service/UserService";
import { RouteProps } from 'react-router';

interface Users {
  users: User[]
}

export default class UserComponent extends Component<RouteProps, Users> {

  constructor(props: RouteProps) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <>
      <h1 className="text-center">Users List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    );
  }
}