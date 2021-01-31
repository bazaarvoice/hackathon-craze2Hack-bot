
import React, { useState } from 'react';

import SimpleForm from './SimpleForm';
import './App.css';

const MyBot = ( { navigation }) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

    return (
<>


<div className = "bot">
<div style ={{display: showChat ? "" : "none"}}>
<SimpleForm></SimpleForm>
</div>

<div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}> BV Bot </button>
            : <button className="btn" onClick={() => hideChat()}> Done </button>}
</div>
</div>
</>
    )
}

export default MyBot;
