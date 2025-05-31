import React, { useState } from 'react'
import Chatbot_icon from './components/Chatbot_icon'
import Chatfooter from './components/Chatfooter'
import ChatMessage from './components/ChatMessage'
const App = () => {
  const[chatHistory , setChatHistory] = useState([])
  return (
    <div>
     <div className="container">
      <div className="chat-popup">
        <div className="chat-header">

          <div className="header-info">
            <Chatbot_icon/>
            <h2 className='logo'>Chatbot</h2>
           
          </div>
          <button class="material-icons">
             keyboard_arrow_down
             </button>
          </div>
          {/* CHATBOT BODY */}

          <div className="chatbot-body">
            <div className="msg bot-msg">
              <Chatbot_icon></Chatbot_icon>
              <p className='msg-text'>Hey there,👋 <br /> How can I help you today ?</p>
            </div>
            {chatHistory.map((chat,index)=>(
              <ChatMessage key = {index} chat = {chat}></ChatMessage>
            ))}

           
          </div>

        
        {/* CHATBOT-FOOTER */}
        <div className="chatbot-footer">
         <Chatfooter setChatHistory = {setChatHistory}></Chatfooter>
        </div>
      </div>
     </div>
    </div>
  )
}

export default App
