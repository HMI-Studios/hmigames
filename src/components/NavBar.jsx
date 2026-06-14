import React from 'react';
import { useLocation, Link } from 'react-router-dom';

// const paths = {
//   '/': 'All Games',
//   '/#action': 'Action',
//   '/#strategy': 'Strategy',
// }

const NavBar = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container nav">
        <Link className="d-flex align-center" to="/">
          <img className="ma-3 ml-4 mr-4" style={{ height: '40px' }} src="/static/images/hmi-icon.svg" />
          <h1>HMI Games</h1>
        </Link>
        {/* <nav>
          {Object.keys(paths).map(path => (
            <Link key={path} className={`${path === location.pathname + location.hash ? 'selected' : ''}`} to={path}>{paths[path]}</Link>
          ))}
        </nav> */}
      </div>
    </header>
  );
};

export default NavBar;