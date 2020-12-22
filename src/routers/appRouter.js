import React from 'react';
import {
  Router,
  BrowserRouter,
  Link,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path='/' component={LoginPage} />
        <PrivateRoute exact path='/dashboard' component={ExpenseDashboard} />
        <PrivateRoute path='/create' component={AddExpensePage} />
        <PrivateRoute path='/edit/:id' component={EditExpensePage} />
        <PrivateRoute path='/expense/' component={ExpenseDashboard} />
        <PrivateRoute path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
