import React from 'react';
import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../common/template/dependencies";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover />
    </div>
  );
}

export default App;
