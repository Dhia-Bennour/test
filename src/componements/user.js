import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import '../App.css';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
      this.setState({
        users: res.data
      })
    );
  }
  render() {
    return (
      <div className="boxs">
        {this.state.users.map((user, key) => (
          <div className="box">
            <div className="aze"> 
      <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Avatar"
              className="image"
            ></img>
            
          </div>  
          <div className="desc">          
            <div className="usertext">
              <p>{user.name}</p>
            </div>
            <div className="mail">
              <p>{user.email}</p>
            </div>
            <div className="description">
            <p>{user.company.name}</p>

            </div>
            <Link to="/posts">
              <button 
                className="posts"
                onClick={event => this.props.getid(event.target.id)}
                id={user.id}
              >
                Following
              </button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
