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

export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/dashboard' component={ExpenseDashboard} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/expense/' component={ExpenseDashboard} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
