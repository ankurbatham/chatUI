import React from 'react'
import Chatbot_icon from './Chatbot_icon'

function ChatMessage({chat}) {
  return (
    
       <div className={`msg ${chat.role ==="model"?'bot':'user-msg'} `}>
              {chat.role==="model" && <Chatbot_icon/> }
              <p className='msg-text'>{chat.text}</p>
            </div>
    
  )
}

export default ChatMessage
