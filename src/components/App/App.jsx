// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from 'components/SharedLayout/SharedLayout';
// import ContactPage from 'pages/ContactPage/ContactPage';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import userOperations from 'redux/auth/auth-operations';
// import authSelectors from 'redux/auth/auth-selectors';
// import PublicRoute from 'components/Routes/PublicRoute';
import About from 'pages/About/About';

// import { useAuth } from '../../hooks';

const App = () => {
  // const dispatch = useDispatch();

  // const { isFetchCurrentUser } = useAuth()
  // const isFetchCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  // useEffect(() => {
  //   dispatch(userOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            {/* <Route path="contacts" element={<ContactPage />} /> */}
          </Route>
        </Routes>
      </>

      {/* <ToastContainer autoClose={3000} theme="colored" pauseOnHover /> */}
    </>
  );
};

export default App;
