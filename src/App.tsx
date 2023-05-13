import './App.css';
import Header from './components/base/Header';
import Sidebar from './components/base/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './components/base/Footer';

export default function App(): JSX.Element {
  // Component rendering
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              <Outlet />
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* <UpdateBtn /> */}
    </div>
  );
}

