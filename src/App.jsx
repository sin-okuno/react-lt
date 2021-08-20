import './App.css';
import { UserList } from './userList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserListBootStrap } from './userList_bootStrap';
import { Home } from './home';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/UserList">UserList</Link>
            </li>
            <li>
              <Link to="/UserList_BootStrap">UserList-BootStrap</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/UserList">
            <UserList />
          </Route>
          <Route path="/UserList_BootStrap">
            <UserListBootStrap/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
