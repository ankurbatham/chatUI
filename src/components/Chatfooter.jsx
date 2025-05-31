import React, { useRef } from 'react'

function Chatfooter({setChatHistory}) 
{
 
    let inputRef = useRef();
  
  const handleformSubmit =(e)=>{
e.preventDefault();
const userMessage = inputRef.current.value.trim();
if(!userMessage) return;
inputRef.current.value = "";
if (typeof setChatHistory === 'function') {
  setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
} else {
  console.error('setChatHistory is not a function');
}

setTimeout(() => {
  setChatHistory((history) => [...history, { role: "model", text: "thinking..." }]);
}, 600);




  };
  return (
 
          <form action="#" className="chat-form" onSubmit={handleformSubmit}>
            <input ref={inputRef}type="text" placeholder='Message...' className='input-msg' required/>
             <button class="material-icons">
             arrow_upward
             </button>
          </form>
        
  )
}

export default Chatfooter;
