import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import { IMessage } from "../models/message";
import { socket } from "../services/socket";

export function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const {
    state: { room, username },
  } = useLocation();
  const navigate = useNavigate();

  function sendMessage(message: string) {
    socket.emit("message", {
      username,
      room,
      text: message,
    });
  }

  function disconnect() {
    navigate("/");
  }

  useEffect(() => {
    socket.emit(
      "chatRoom",
      {
        username,
        room,
      },
      (messages: any) => {
        setMessages(messages);
      }
    );

    socket.on("message", (data) => {
      setMessages((v) => [...v, data]);
    });

    socket.on("log", (data) => {
      setMessages((v) => [
        ...v,
        {
          username: "log",
          text: data.message,
        },
      ]);
    });
  }, []);

  return (
    <main className="flex flex-col gap-3 p-4 w-screen h-screen max-h-screen bg-zinc-900">
      <header className="flex justify-between">
        <h2 className="text-zinc-200">{room}</h2>
        <Button onClick={disconnect} className="bg-red-500 hover:bg-red-400">
          Encerar
        </Button>
      </header>
      <MessageList messages={messages} />
      <span className="text-zinc-100"></span>
      <MessageForm onSend={sendMessage} />
    </main>
  );
}
