import React, { useEffect } from "react";
import RocketData from "./rocketdata";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "../../redux/rocketslice";

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <div className="data-container">
      <ul className="map">
        {rockets.map((rocket) => (
          <RocketData key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
}
export default Rockets;
