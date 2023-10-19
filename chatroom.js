import React, { useState } from 'react';
import './index.css'; // Import your CSS file

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage('');
    }
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Fix the chat room bug',
      status: 'To Do',
    },
    {
      id: 2,
      text: 'Add a task board to the chat room',
      status: 'In Progress',
    },
  ]);

  const moveTask = (taskId, newStatus) => {
    const task = tasks.find((task) => task.id === taskId);
    task.status = newStatus;
    setTasks([...tasks]);
  };

  return (
    <div className="chat-room">
      <div className="header">
        <h1>Chat Room</h1>
        <img src="/camera.png" alt="Camera" />
      </div>
      <div className="main-content">
        <div className="messages">
          <ul>
            {messages.map((message, index) => (
              <li key={index}>{message.text}</li>
            ))}
          </ul>
        </div>
        <div className="task-board">
          <h1>Task Board</h1>
          <div className="columns">
            <div className="column to-do">
              <h2>To Do</h2>
              <ul>
                {tasks.filter((task) => task.status === 'To Do').map((task) => (
                  <li key={task.id}>
                    {task.text}
                    <button
                      onClick={() => moveTask(task.id, 'In Progress')}
                      disabled={task.status === 'In Progress'}
                    >
                      In Progress
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column in-progress">
              <h2>In Progress</h2>
              <ul>
                {tasks.filter((task) => task.status === 'In Progress').map((task) => (
                  <li key={task.id}>
                    {task.text}
                    <button
                      onClick={() => moveTask(task.id, 'Done')}
                      disabled={task.status === 'Done'}
                    >
                      Done
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="column done">
              <h2>Done</h2>
              <ul>
                {tasks.filter((task) => task.status === 'Done').map((task) => (
                  <li key={task.id}>
                    {task.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Write a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;



  




  


