import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { IMessage } from "../models/message";

type Props = { message: IMessage };

export default function Message({ message }: Props) {
  const { createdAt, room, text, username } = message;

  const { getUsername } = useContext(UserContext);
  return (
    <p className="text-zinc-300">
      <strong
        className={
          username == getUsername() ? "text-gray-300" : "text-blue-500"
        }
      >
        {username}:{" "}
      </strong>
      {text}
    </p>
  );
}
