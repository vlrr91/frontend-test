import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

export default function App() {
  return (
    <>
      {routes.map(({
        path, exact, component: Component, fetchInitialData,
      }) => (
        <Switch key={path}>
          <Route
            path={path}
            exact={exact}
            render={(props) => (
              <Component {...props} fetchInitialData={fetchInitialData} />
            )}
          />
        </Switch>
      ))}
    </>
  );
}
