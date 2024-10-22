import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BrandsPage from '@/pages/BrandsPage';
import CommunityPage from '@/pages/CommunityPage';
import ContactPage from '@/pages/ContactPage';
import Loading from '@/pages/Loading';

export const router = createBrowserRouter([
  {
    path: '/',
      element: (
          <Loading />
        ),
      children: [
        {
          path: '',
          element: (
            <HomePage />
          ),
          children: [],
        },
        {
          path: 'about',
          element: (
              <AboutPage />
          ),
          children: [],
        },
        {
          path: 'brands',
          element: (
            <BrandsPage />
          ),
          children: [],
        },
        {
          path: 'community',
          element: (
            <CommunityPage />
          ),
          children: [],
        },
        {
          path: 'contact',
          element: (
            <ContactPage />
          ),
          children: [],
        },
      ],
    },
  ],
);
