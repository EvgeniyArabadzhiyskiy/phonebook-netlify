import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

const PublicRoute = ({ children, restricted = false, navigateTo = '/' }) => {
   const { isLoggedIn } = useAuth()
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={navigateTo} /> : children}</>;
};

export default PublicRoute;
