import DesktopAbout from '@pages/desktop/about';
import DesktopContact from '@pages/desktop/contact';
import DesktopProject from '@pages/desktop/project';
import DesktopResume from '@pages/desktop/resume';
import ErrorPage from '@pages/error';
import MobileAbout from '@pages/mobile/about';
import MobileContact from '@pages/mobile/contact';
import MobileProject from '@pages/mobile/project';
import MobileResume from '@pages/mobile/resume';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: '/', element: <DesktopProject /> },
  { path: '/about', element: <DesktopAbout /> },
  { path: '/contact', element: <DesktopContact /> },
  { path: '/resume', element: <DesktopResume /> },
  { path: '/m/', element: <MobileProject /> },
  { path: '/m/about', element: <MobileAbout /> },
  { path: '/m/contact', element: <MobileContact /> },
  { path: '/m/resume', element: <MobileResume /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> }
])