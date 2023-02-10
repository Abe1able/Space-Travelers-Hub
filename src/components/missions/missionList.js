import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItems from './missionItem';
import { fetchMissions } from '../../redux/missions/missionReducer';

import './missionList.css';

function MissionList() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <section className="tableSection">
      <table>
        <tr>
          <th width="10%" className="border">
            Mission
          </th>
          <th width="60%" className="border">
            Description
          </th>
          <th className="border">Status</th>
          <th className="border"> </th>
        </tr>
        <tbody>
          {missions.map((elements) => (
            <MissionItems key={elements.missionId} items={elements} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default MissionList;
