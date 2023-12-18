import React from 'react';
import './App.scss';
import {ChatRoom} from "./components/ChatRoom/ChatRoom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ChatRoom></ChatRoom>
            </header>
        </div>
    );
}

export default App;
