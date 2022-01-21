import './Dashboard.css';
import Header from './Header';
import Home from './Home';
import SideBar from './Sidebar';
import Resources from './Resources';
import SetupModal from './SetupModal';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function Dashboard({setData}) {
  // State for setting the visibility of the Modal
  const [visibility, setVisibility] = useState('none');

  // Function for making Modal display: block
  function makeModalVisible() {
    setVisibility('block');
  }

  // Function for making Modal display: none
  function makeModalHidden() {
    setVisibility('none');
  }

  // Makes Modal appear on first render of app only.
  useEffect(() => {
    makeModalVisible();
  }, []);

  return (
    <div className="dashboard">
      <SetupModal
        isVisible={visibility}
        makeModalVisible={makeModalVisible}
        makeModalHidden={makeModalHidden}
        setData={setData}
      />
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home setData={setData}/>} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
