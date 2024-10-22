import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="p-8 grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}