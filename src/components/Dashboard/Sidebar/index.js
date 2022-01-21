import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import homeLogo from './home.svg';
import resourcesLogo from './resources.svg';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <NavLink exact activeClassName="active" to="/">
          <div className="sidebar-nav-btn">
            <img src={homeLogo} className="home-logo" alt="home-logo" />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink exact activeClassName="active" to="/resources">
          <div className="sidebar-nav-btn">
            <img
              src={resourcesLogo}
              className="resources-logo"
              alt="resources-logo"
            />
            <p>Resources</p>
          </div>
        </NavLink>
      </div>
      <div className="team">
        <h2>Team</h2>
        <ul>
          <li>Ashlie</li>
          <li>Tom</li>
          <li>Eni</li>
          <li>Max</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
