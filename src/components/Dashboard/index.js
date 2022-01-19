import './Dashboard.css';
import Header from './Header';
import Home from './Home';
import SideBar from './Sidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <SideBar />
      <Home />
    </div>
  );
}

export default Dashboard;
