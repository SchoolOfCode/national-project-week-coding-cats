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
  const [zIndex, setZIndex] = useState('');

  function makeModalVisible() {
    setVisibility('block');
    setZIndex('999');
  }

  function makeModalHidden() {
    setVisibility('none');
    setZIndex('-999');
  }
  useEffect(() => {
    makeModalVisible();
  }, []);

  return (
    <div className="dashboard">
      <SetupModal
        isVisible={visibility}
        makeModalVisible={makeModalVisible}
        zIndex={zIndex}
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
