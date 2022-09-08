import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

const PrivatRoute = ({ children, navigateTo = '/' }) => {
   const { isLoggedIn } = useAuth()

  return isLoggedIn ? children : <Navigate to={navigateTo} />;
};

export default PrivatRoute;













// import { Navigate, Outlet } from 'react-router-dom';

// const PrivatRoute = ({ navigateTo = '/',}) => {
//   const auth = useSelector(authSelectors.getIsLOggedIn);

//   return auth ? <Outlet /> : <Navigate to={navigateTo} />;
// };

// export default PrivatRoute;

// import { Navigate } from 'react-router-dom';

// const PrivatRoute = ({ Component }) => {
//   const auth = useSelector(authSelectors.getIsLOggedIn);

//   if (!auth) {
//     return null;
//   }

//   return <>{auth ? Component : <Navigate to="/login" />}</>;
// };

// export default PrivatRoute;
