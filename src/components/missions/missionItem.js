import React from 'react';
/* eslint-disable react/prop-types */
function MissionItems({ items }) {
  const { missionId, missionName, description } = items;

  return (
    <tr key={missionId}>
      <td>Mission</td>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>Computer</td>
    </tr>
  );
}

export default MissionItems;
