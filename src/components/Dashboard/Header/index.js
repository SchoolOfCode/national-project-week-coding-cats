import AppName from './AppName';
import Time from './Time';

function Header() {
  return (
    <div className="header">
      <AppName />
      <Time time={'10:30'} />
    </div>
  );
}

export default Header;
