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
  { path: '/desktop/', element: <DesktopProject /> },
  { path: '/desktop/about', element: <DesktopAbout /> },
  { path: '/desktop/contact', element: <DesktopContact /> },
  { path: '/desktop/resume', element: <DesktopResume /> },
  { path: '/mobile/', element: <MobileProject /> },
  { path: '/mobile/about', element: <MobileAbout /> },
  { path: '/mobile/contact', element: <MobileContact /> },
  { path: '/mobile/resume', element: <MobileResume /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> }
])