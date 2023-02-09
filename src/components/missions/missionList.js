import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionReducer';
import MissionItems from './missionItem';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <section className="tableSection">
      <table>
        <tr>
          <td>Mission</td>
          <td>Description</td>
          <td>Status</td>
          <td>{' '}</td>
        </tr>
        {
        missions.map((elements) => (

          <MissionItems key={elements.missionId} items={elements} />
        ))
     }

      </table>
    </section>
  );
};

export default MissionList;
