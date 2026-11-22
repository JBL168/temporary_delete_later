// Study-room booking helpers

const rooms = {
  "Evans 204": { capacity: 6, slots: {} },
  "Evans 210": { capacity: 4, slots: {} },
};

function getSlot(roomName, time) {
  const room = rooms[roomName];
  if (!room.slots[time]) {
    room.slots[time] = { taken: false, bookedBy: null };
  }
  return room.slots[time];
}

function bookRoom(roomName, time, student) {
  const slot = getSlot(roomName, time);
  slot.taken = true;
  slot.bookedBy = student;
  return slot;
}

module.exports = { rooms, getSlot, bookRoom };
