import React from 'react';
import logo from './logo.svg';
import './App.css';
import useWebSocket from "react-use-websocket";

function App() {
    const {sendJsonMessage, getWebSocket} = useWebSocket("ws://localhost:8080/ws/chat/1/danil", {
        onOpen: () => console.log('WebSocket connection opened.'),
        onClose: () => console.log('WebSocket connection closed.'),
        shouldReconnect: (closeEvent) => true,
        onMessage: (event: WebSocketEventMap['message']) => console.log("event", event)

    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button onClick={() => sendJsonMessage(JSON.stringify({
                    text: "privet"
                }))}>
                    Send message
                </button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
