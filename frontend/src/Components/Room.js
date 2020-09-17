import React from "react";
import { Link } from "react-router-dom";
import "./Room.css";
function Room({roomNumber}){
return (
    <div className="room">
        <Link to={{
            pathname: `./room/${roomNumber}`, state:{roomNumber:roomNumber}
            }}
        >
            <div className="room__data">
                <h3 className="room__id" id="roomNumber">{roomNumber}</h3>
            </div>
        </Link>
    </div>
    );
}
export default Room;