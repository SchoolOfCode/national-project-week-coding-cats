import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />}/>
      </Routes>
    </div>
  );
}

export default Dashboard;
