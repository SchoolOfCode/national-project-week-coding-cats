import './Sidebar.css';
import homeLogo from './home.svg';
import resourcesLogo from './resources.svg';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <div className="sidebar-nav-btn sidebar-nav-btn--active">
          <img src={homeLogo} className="home-logo" />
          <p>Home</p>
        </div>
        <div className="sidebar-nav-btn">
          <img src={resourcesLogo} className="resources-logo" />
          <p>Resources</p>
        </div>
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
