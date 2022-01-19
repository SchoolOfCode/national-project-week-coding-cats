import './AppName.css';
import logo from './AppName.svg';
function AppName() {
  return (
    <div className="app-name">
      <img src={logo} className="logo" />
      <h1 className="app-name-heading">Hackaplanner</h1>
    </div>
  );
}

export default AppName;
