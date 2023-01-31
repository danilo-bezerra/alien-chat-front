import React, {
  FormEvent,
  useState,
  useRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { IMessage } from "../models/message";
import Button from "./Button";
import Textarea from "./Textarea";

type Props = {
  onSend: (message: string) => void;
};

export default function MessageForm({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const formRef = useRef(null);

  function handleInput(e: any) {
    setMessage(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (message.length) {
      onSend(message);
    }
  }

  return (
    <form ref={formRef} className=" h-20 " onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <Textarea
          className="w-full resize-none rounded-md px-2 py-1 outline outline-zinc-500 outline-2 focus:outline-blue-500 focus:outline-2 "
          placeholder="Escreva aqui..."
          value={message}
          onChange={handleInput}
        />
        <input type="submit" hidden />
        <Button>Enviar</Button>
      </div>
    </form>
  );
}
