import DesktopAbout from '@pages/desktop/about';
import DesktopMore from '@pages/desktop/more';
import DesktopProject from '@pages/desktop/project';
import ErrorPage from '@pages/error';
import MobileAbout from '@pages/mobile/about';
import MobileMore from '@pages/mobile/more';
import MobileProject from '@pages/mobile/project';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: '/', element: <DesktopProject /> },
  { path: '/about', element: <DesktopAbout /> },
  { path: '/more', element: <DesktopMore /> },
  { path: '/m/', element: <MobileProject /> },
  { path: '/m/about', element: <MobileAbout /> },
  { path: '/m/more', element: <MobileMore /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> }
])