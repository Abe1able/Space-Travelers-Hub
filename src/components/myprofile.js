import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/app.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.mission);
  return (
    <div className="profile-section">
      <table className="table">
        <thead>
          <tr>
            <th>
              <h3>My Missions</h3>
              <hr className="rocket-line" />
            </th>
          </tr>
        </thead>
        <tbody>
          {missions
            .filter((missions) => missions.reserved)
            .map((missions) => (
              <tr key={missions.id} className="border">
                <p className="profile-mission">{missions.missionId}</p>
              </tr>
            ))}
        </tbody>
      </table>
      <table className="table-rocket">
        <thead>
          <tr>
            <th>
              <h3>My Rockets</h3>
              <hr className="rocket-line" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rockets
            .filter((rockets) => rockets.reserved === true)
            .map((rockets) => (
              <tr key={rockets.id} className="border-rocket">
                <p className="rocket-paragraph">{rockets.rocketName}</p>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default MyProfile;
