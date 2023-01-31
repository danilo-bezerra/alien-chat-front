import { useRef, useEffect } from "react";
import { IMessage } from "../models/message";
import Message from "./Message";

type Props = {
  messages: IMessage[];
};

export default function MessageList({ messages }: Props) {
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
    }
  });

  return (
    <section
      ref={sectionRef}
      className="bg-zinc-800 p-2 flex-1 rounded-md overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
    >
      {messages.map((m, i) => (
        <Message key={crypto.randomUUID()} message={m} />
      ))}
    </section>
  );
}
