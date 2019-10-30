import React, { Component } from "react";
// import axios from 'axios';
import { Route, Link } from "react-router-dom";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/new-post">New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />

        {/* <Posts /> */}
      </div>
    );
  }
}

export default Blog;
