import React from 'react';
import { Outlet } from "react-router-dom";

import NavBar from '../components/NavBar.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Outlet />
        </main>

        <footer className="container footer">
          {/* <div className="ad-box small"></div> */}
          <p>© 2026 HMI Studios</p>
        </footer>
      </>
    );
  }
}

export default Layout;