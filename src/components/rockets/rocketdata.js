/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { booking, cancelBooking } from "../../redux/rocketslice";

function RocketData(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const { id, rocketName, description, flickrImages, reserved } = rocket;

  return (
    <li className="list-container">
      <img src={flickrImages[0]} alt="rockets" width={300} height={220} />
      <div className="heading">
        <h2>{rocketName}</h2>
        <p className="paragraph">
          {reserved ? <span className="reserved">Reserved</span> : null}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            className="cancel"
            onClick={() => dispatch(cancelBooking(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className="rocket-button"
            onClick={() => dispatch(booking(id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
}

export default RocketData;
