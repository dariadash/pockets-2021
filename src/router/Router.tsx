import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PATHS } from './paths';

import { AuthGuard } from './AuthGuard';
import { Login, MainScreen, Register } from '@/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <AuthGuard>
        <Switch>
          <Route exact={true} path={PATHS.register} component={Register} />
          <Route exact={true} path={PATHS.auth} component={Login} />
          <Route exact={true} path={PATHS.mainScreen} component={MainScreen} />
          <Redirect to={PATHS.auth} />
        </Switch>
      </AuthGuard>
    </BrowserRouter>
  );
};
export default Router;
