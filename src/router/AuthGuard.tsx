import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { PATHS } from './paths';
import { getProfileData } from '../model/actions/auth';

export const AuthGuard = ({ children }: any) => {
  const dispatch = useDispatch();
  const appLoaded = useSelector((state: RootStateOrAny) => state.app.appLoaded);
  const authorizedUser = useSelector((state: RootStateOrAny) => state.user.user);
  const history = useHistory();

  React.useEffect(() => {
    dispatch(getProfileData());
  }, []);

  React.useEffect(() => {
    if (appLoaded && !authorizedUser) {
      history.push(PATHS.auth);
    }
  }, [appLoaded, authorizedUser, history]);

  return (
    <>
      {!appLoaded && <div>Загрузка...</div>}
      {appLoaded && <>{children}</>}
    </>
  );
};
