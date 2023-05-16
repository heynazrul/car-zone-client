import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Checkout from '../pages/Checkout/Checkout';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Appointments from '../pages/Appointments/Appointments';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/appointments',
        element: (
          <PrivateRoutes>
            <Appointments />
          </PrivateRoutes>
        ),
      },
      {
        path: 'service-details/:id',
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`https://car-zone-server-three.vercel.app/service-details/${params.id}`),
      },
      {
        path: '/checkout/:id',
        element: <Checkout />,
        loader: ({ params }) => fetch(`https://car-zone-server-three.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;
