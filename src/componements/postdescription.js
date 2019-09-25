import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     posts: []
    };
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`).then(res =>
      this.setState({
        posts: res.data
      })
    );
  }
  render() {
      
    console.log(this.props.id)
    return (
    <div className="boxs">
    {this.state.posts.map((el, key) => (
          <div className="box" >
               <div className="usertext">
              <p>{el.name}</p>
            </div>
              <div className="usertext">
              <p>{el.email}</p>
            </div>
            <div className="usertext">
              <p>{el.title}</p>
            </div>
            <div className="description">
              <p>
                {el.body}
              </p>
            </div>
           
          </div>
        ))}
     </div>
    );
  }
}

export default User;
