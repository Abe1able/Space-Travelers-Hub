import React from 'react';

const MissionItems = ({ items }) => {
  const {
    missionId, missionName, description,
  } = items;

  return (
    <tr key={missionId}>
      <td>Mission</td>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>Computer</td>
    </tr>
  );
};

export default MissionItems;
