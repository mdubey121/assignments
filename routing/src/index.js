import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './users';
import Posts from './posts';
import Comments from './comments';
import PostsLoading from './postsloading';
import CommentsLoading from './commentsloading';
import UsersLoading from './usersloading';
import Home from './home';
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/posts" component={Posts} />
      <Route path="/comments" component={Comments} />

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
