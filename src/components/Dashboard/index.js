import { Routes, Route } from 'react-router-dom';
import './Dashboard.css';
import Header from './Header';
import Home from './Home';
import SideBar from './Sidebar';
import Resources from './Resources';
import SetupModal from './SetupModal';
import { useEffect, useState } from 'react';

//two functions
//one which updates states to say visible
//one that updates the state to hidden
function Dashboard() {
  const [visibility, setVisibility] = useState('none');

  function makeModalVisible() {
    setVisibility('block');
  }

  function makeModalHidden() {
    setVisibility('none');
  }
  useEffect(() => {
    makeModalVisible();
  }, []);

  return (
    <div className="dashboard">
      <SetupModal
        isVisible={visibility}
        makeModalVisible={makeModalVisible}
        makeModalHidden={makeModalHidden}
      />
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
