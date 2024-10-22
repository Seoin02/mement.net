import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import RootLayout from '@/components/Layout';
import AboutPage from '@/pages/AboutPage';
import BrandsPage from '@/pages/BrandsPage';
import CommunityPage from '@/pages/CommunityPage';
import ContactPage from '@/pages/ContactPage';
import ErrorPage from '@/pages/ErrorPage';
import { Suspense } from 'react';

export const router = createBrowserRouter([
  {
    path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          ),
          children: [],
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutPage />
            </Suspense>
          ),
          children: [],
        },
        {
          path: 'brands',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <BrandsPage />
            </Suspense>
          ),
          children: [],
        },
        {
          path: 'community',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CommunityPage />
            </Suspense>
          ),
          children: [],
        },
        {
          path: 'contact',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          ),
          children: [],
        },
      ],
    },
  ],
);
