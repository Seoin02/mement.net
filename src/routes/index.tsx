import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import RootLayout from '@/components/Layout';
import AboutPage from '@/pages/AboutPage';
import BrandsPage from '@/pages/BrandsPage';
import CommunityPage from '@/pages/CommunityPage';
import ContactPage from '@/pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <HomePage />,
          children: [],
        },
        {
          path: 'about',
          element: <AboutPage />,
          children: [],
        },
        {
          path: 'brands',
          element: <BrandsPage />,
          children: [],
        },
        {
          path: 'community',
          element: <CommunityPage />,
          children: [],
        },
        {
          path: 'contact',
          element: <ContactPage />,
          children: [],
        },
      ],
    },
  ],
);
