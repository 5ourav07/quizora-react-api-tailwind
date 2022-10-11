import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts></Layouts>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>,
      },
      {
        path: '/home',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/*',
        element: <NotFound></NotFound>,
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
