import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DesctopMenu from 'components/DesctopMenu/DesctopMenu';

const SharedLayout = () => {
  return (
    <>
      <DesctopMenu />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
