import './Dashboard.css';
import Header from './Header';
import Home from './Home';
import SideBar from './Sidebar';
import Resources from './Resources';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <SideBar />
      <Home />
      <Resources />
    </div>
  );
}

export default Dashboard;
