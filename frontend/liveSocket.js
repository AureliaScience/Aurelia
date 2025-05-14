const socket = new WebSocket("ws://localhost:5000/live-feed");
socket.onmessage = function(event) {
  const data = JSON.parse(event.data);
  console.log("Live feed:", data);
};