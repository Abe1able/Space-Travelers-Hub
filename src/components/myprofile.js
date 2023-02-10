import React from "react";
import { useSelector } from "react-redux";
const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket);
  const missions = useSelector((state) => state.missions);
  return (
    <>
      <div className="d-flex">
        <table className="table w-50 m-5">
          <thead>
            <tr>
              <th>
                <h3>My Missions</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {missions
              .filter((mission) => mission.reserved)
              .map((mission) => (
                <tr key={mission.id} className="border">
                  <p className="m-2">{mission.missionId}</p>
                </tr>
              ))}
          </tbody>
        </table>
        <table className="table w-50 m-5">
          <thead>
            <tr>
              <th>
                <h3>My Rockets</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {rockets
              .filter((rocket) => rocket.reserved == true)
              .map((rocket) => (
                <tr key={rocket.id} className="border">
                  <p className="m-2">{rocket.rocketName}</p>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyProfile;

// import React from "react";
// import { useSelector } from "react-redux";

// const MyProfile = () => {
//   const res = (state) => {
//     if (state.reserved === true) {
//       return { ...state, reserved: true };
//     }
//     return state.reserved;
//   };

//   const rockets = useSelector((state) => state.rockets.rockets);
//   const missions = useSelector((state) => state.missions);

//   //   const currentState = useSelector((state) => state.mission.missions);
//   //   const newArray = currentState.filter(res);

//   return (
//     <div className="myProfile">
//       <table className="table w-50 m-5">
//         <thead>
//           <tr>
//             <th>
//               <h3>My Missions</h3>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {missions
//             .filter((mission) => mission.reserved)
//             .map((mission) => (
//               <tr key={mission.id} className="border">
//                 <p className="m-2">{mission.name}</p>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="myRockets">
//         <h4>My Rockets</h4>
//         <tbody>
//           {rockets
//             .filter((rocket) => rocket.reserved === true)
//             .map((filteredRocket) => (
//               <tr key={filteredRocket.id}>
//                 <td>{filteredRocket.rocketName}</td>
//               </tr>
//             ))}
//         </tbody>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
