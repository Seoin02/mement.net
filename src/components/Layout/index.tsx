import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <main className="pt-8 pb-8 grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}