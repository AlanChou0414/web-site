import ErrorPage from '@pages/error';
import HomePage from '@pages/home';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/error',
    element: <ErrorPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])