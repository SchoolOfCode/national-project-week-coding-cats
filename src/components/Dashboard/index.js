import './Dashboard.css';
import Header from './Header';
import Home from './Home';
import SideBar from './Sidebar';
import Resources from './Resources';
import SetupModal from './SetupModal';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function Dashboard() {
  // State for setting the visibility of the Modal
  const [visibility, setVisibility] = useState('none');

  //Initial Data state from the API fetch. Default value is empty array.
  const [data, setData] = useState([]);

  // Function for fetching all data from API
  async function getData() {
    const response = await fetch('https://hackaplanner.herokuapp.com/users');
    const json = await response.json();
    // Set data state
    setData(json.payload[0]);
  }

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
        getData={getData}
      />
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home getData={getData} data={data} />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
