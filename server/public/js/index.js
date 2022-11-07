const socket = io("localhost:6050/admin");

socket.on("connect", () => {
    // console.log("connected")
})

socket.on("update player count", (count) =>{
    set(count)
})


reset = () => {
    roomID = document.getElementById("roomID").value;
    // console.log(roomID)
    socket.emit('reset room', roomID)
}





set = ( count ) => {
    playerCountElem = document.getElementById('playerCount')
    playerCountElem.innerHTML = `player count : ${count}`
}
