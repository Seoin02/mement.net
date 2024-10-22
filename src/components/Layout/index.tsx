import Header from '@/components/Layout/Header';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="p-8 flex grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}