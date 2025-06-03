import React, { useRef, useState,useEffect } from 'react'
import Chatbot_icon from './components/Chatbot_icon'
import Chatfooter from './components/Chatfooter'
import ChatMessage from './components/ChatMessage'
const App = () => {
  const[chatHistory , setChatHistory] = useState([])
  const[chatOpen , setchatOpen] = useState(false)
  const messageEndRef = useRef(null)

  const scrollToBottom = () => {
  if (messageEndRef.current) {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" ,display:"none"});
  }
};

useEffect(() => {
  scrollToBottom();
}, [chatHistory]);


  return (
  <>
    <div className="icon">
      <button onClick={() => setchatOpen(!chatOpen)}> 
        <Chatbot_icon />
      </button>
    </div>

    {chatOpen && (
      <div className="container">
        <div className="chat-popup">
          
          {/* Header */}
          <div className="chat-header">
            <div className="header-info">
              <Chatbot_icon />
              <h2 className='logo'>Chatbot</h2>
            </div>
            <button className="material-icons">keyboard_arrow_down</button>
          </div>

          {/* Body */}
          <div className="chatbot-body">
            <div className="msg bot-msg">
              <Chatbot_icon />
              <p className='msg-text'>
                Hey there,👋 <br /> How can I help you today ?
              </p>
            </div>

            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

            {/* Invisible scroll target */}
            <div ref={messageEndRef} />
          </div>

          {/* Footer */}
          <div className="chatbot-footer">
            <Chatfooter setChatHistory={setChatHistory} />
          </div>

        </div>
      </div>
    )}
  </>
)

}

export default App
