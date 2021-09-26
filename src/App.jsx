import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './page/loginPage';
import ToDoPage from './page/toDoPage';

const routes = [
  {
    // exact: true,
    path: '/',
    component: <LoginPage />,
  },
  {
    path: '/toDoPage',
    component: <ToDoPage />,
  },
  {
    path: '/loginPage',
    component: <LoginPage />,
  },
];

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((item) => (
          <Route
            key={item.path}
            // exact={item.exact}
            path={item.path}
          >
            {item.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
