import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FloatingButtons from './FloatingButtons';
export default function Layout() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
