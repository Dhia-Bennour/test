import React from "react";
import "./App.css";
import User from "./componements/user";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Posts from "./componements/posts";
import Postdescriptions from './componements/postdescription';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      idpost:null,
    };
  }
  getid = idpost => {
    this.setState({
      id: idpost
    });
  };
  getidpost = id => {
    this.setState({
      idpost: id
    });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <User getid={this.getid} />}
              />
              <Route
                exact
                path="/posts"
                component={() => <Posts id={this.state.id} getidpost={this.getidpost} />}
              />
               <Route
                exact
                path="/postsdescriptions"
                component={() => <Postdescriptions id={this.state.idpost}  />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
