import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import RootLayout from '@/components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          children: [],
        },
      ],
    },
  ],
);
