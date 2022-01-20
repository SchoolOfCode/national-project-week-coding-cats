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

  //Initial data state
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch('https://hackaplanner.herokuapp.com/users');
    const json = await response.json();
    //set data state
    setData(json.payload[0]);
  }

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
