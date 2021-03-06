import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hey", "Yo", "Sup"]);
  const [username, setUsername] = useState("");

  const sendMessage = event => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Messenger</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* messages */}
      {messages.map(message => (
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;
