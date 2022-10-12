import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import QuizTopic from './Components/QuizTopic/QuizTopic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts></Layouts>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>,
      },
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>,
      },
      {
        path: '/quiz/:id',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <QuizTopic></QuizTopic>,
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
