import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader';
import {Icon} from '../Icon/Icon'

export default function SharedLayout() {
  return (
    <div>
      <header>Header
      </header>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}