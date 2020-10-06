import React, {useEffect, useState} from "react"
import { FormControl, Input } from "@material-ui/core"
// import logo from "./logo.svg"
import "./App.css"
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState("")

    // useState = variable in REACT
    // useEffect = run code on a condition in REACT

    useEffect(() => {
        // run once when the app conponent loads
        db.collection("messages")
            .orderBy("timestamp","desc")
            .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
        });
    }, [] ) // condition

    useEffect(() => {
        // const username = prompt("Please enter your name")
        setUsername(prompt("Please enter your name"))
    }, []) // condition

    console.log(input)
    console.log(messages)

  const sendMessage = (event) => {
      // all the logic to send a message goes here
      event.preventDefault()

      db.collection("messages").add({
          message: input,
          username: username,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      setInput("")
  }

  return (
      <div className="App">
          <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
          <h1>Hello Clever Programmers 🚀 !</h1>
          <h2>Welcome {username}</h2>

          <form className="app_form">
              <FormControl className="app_formControl">
                  <Input className="app_input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
                  <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                      <SendIcon />
                  </IconButton>
              </FormControl>
          </form>

          <FlipMove>
              {
                  messages.map(({id, message}) => (
                      <Message key={id} username={username} message={message} />
                      ))
              }
          </FlipMove>
      </div>
  )
}

export default App;

//2.19.50