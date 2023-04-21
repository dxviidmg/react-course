import { useState } from "react";

export function FormState(){
    const [isSent, setIsSent] = useState(false)
    const [message, setMessage] = useState('hi')

    if (isSent){
        return <h1> Your messager is on its way</h1>
    }

    return (
        <form onSubmit={(e) => {e.preventDefault()
        setIsSent(true)
        sendMessage(message)}}>
            <textarea placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">send</button>
        </form>
    )
}

function sendMessage(message) {
    // ...
  }