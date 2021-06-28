import React from 'react';
import { UserContext } from 'Context/UserContext';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (login) return <Route {...props} />;
  else if (!login) return <Navigate to="/login" />;
  else return null;
};

export default PrivateRoute;
