
import './App.css';
import io from 'socket.io-client'
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")

function App() {
  const [username,setUserName] = useState("");
  const [room,setRoom] = useState("");
  const [showChat,setChowChat]= useState(false);

  const joinRoom  = () =>{
    if(username!=="" && room!==""){
      socket.emit("join_room",room);
      setChowChat(true)

    }

  }

  return (
    <div className="App">
      {!showChat ? (
      <div className='joinChatContainer'>
    <h3>Join a  chat </h3>
    <input type="text" placeholder='John...' onChange={(e)=>{setUserName(e.target.value)}} />
    <input type="text" placeholder='room id' onChange={(e)=>{setRoom(e.target.value)}} />
    <button onClick={joinRoom}>Join a room</button></div> )
    : (
    <Chat socket={socket} username={username} room={room} /> 
    )}
    </div>
  );
}

export default App;
