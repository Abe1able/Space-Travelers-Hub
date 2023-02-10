import React from 'react';
import { Route, Routes } from 'react-router';
import MissionList from './components/missions/missionList';
import Navbar from './components/navbar/navbar';
import Rockets from './components/rockets/rocketlist';
import MyProfile from './components/myprofile';

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<MissionList />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
