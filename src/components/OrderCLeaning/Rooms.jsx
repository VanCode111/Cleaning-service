import React from "react";
import RoomCard from "./RoomCard";
import { useSelector } from "react-redux";
function Rooms({ addRoom, removeRoom, roomsOrder }) {
  const { rooms } = useSelector(({ cleaning }) => cleaning);
  console.log(rooms);
  return (
    <div className="rooms">
      {rooms.map((room) => {
        return (
          <RoomCard
            amount={roomsOrder[room.id] || 0}
            addRoom={addRoom}
            removeRoom={removeRoom}
            name={room.name}
            id={room.id}
            price={room.price}
          />
        );
      })}
    </div>
  );
}

export default Rooms;
