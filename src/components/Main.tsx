import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CatSlavePage from '../aboutPages/CatSlavePage';
import HusbandPage from '../aboutPages/HusbandPage';
import ChristianPage from '../aboutPages/ChristianPage';
// import Footer from './Footer';

import App from './App';

const Main = () => {
  const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/cat-slave', element: <CatSlavePage /> },
    { path: '/husband', element: <HusbandPage /> },
    { path: '/christian', element: <ChristianPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Main;
