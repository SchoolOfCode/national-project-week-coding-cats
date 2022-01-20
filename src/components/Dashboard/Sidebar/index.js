import { Link } from 'react-router-dom';
import './Sidebar.css';
import homeLogo from './home.svg';
import resourcesLogo from './resources.svg';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <Link to="/">
          <div className="sidebar-nav-btn sidebar-nav-btn--active">
            <img src={homeLogo} className="home-logo" alt="home-logo" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/resources">
          <div className="sidebar-nav-btn">
            <img
              src={resourcesLogo}
              className="resources-logo"
              alt="resources-logo"
            />
            <p>Resources</p>
          </div>
        </Link>
      </div>
      <h2>TEAM:</h2>
      <ul>
        <li>ashlie</li>
        <li>tom</li>
      </ul>
    </div>
  );
}

export default SideBar;
