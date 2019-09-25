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
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`).then(res =>
      this.setState({
        posts: res.data
      })
    );
  }
  render() {
    console.log(this.state.posts)
    return (
     <div className="boxs-post">
    {this.state.posts.map((el, key) => (
          <div className="box" >
          
              <div className="title">
              <p>{el.title}</p>
            </div>
            <div className="description">
              <p>
                {el.body}
              </p>
            </div>
            <Link to="/postsdescriptions">
              <button
                className="posts"
                onClick={event => this.props.getidpost(event.target.id)}
                id={el.id}
              >
                POSTS
              </button>
            </Link>
          </div>
        ))}
     </div>
    );
  }
}

export default User;
