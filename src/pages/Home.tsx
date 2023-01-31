import { useState, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

type Props = {};

export function Home({}: Props) {
  const { getUsername, saveUsername } = useContext(UserContext);

  const [room, setRoom] = useState("");
  const [username, setUsername] = useState(getUsername());

  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (room && username) {
      saveUsername(username);
      navigate("/chat", {
        state: {
          room,
          username,
        },
      });
    }
  }

  return (
    <main className="flex items-center justify-center  gap-3 p-4 w-screen h-screen max-h-screen bg-zinc-900 ">
      <form className="flex flex-col gap-4 max-w-xs " onSubmit={onSubmit}>
        <label className="text-zinc-100" htmlFor="chat-type">
          Username
        </label>
        <input
          className="px-2"
          type="text"
          placeholder="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <label className="text-zinc-100" htmlFor="chat-type">
          Selecione um tipo de chat - {room}
        </label>
        <select
          id="chat-type"
          onChange={({ target }) => setRoom(target.value)}
          value={room}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="tecnologia">Tecnologia</option>
          <option value="culinaria">Culinária</option>
          <option value="amizade">Amizade</option>
          <option value="eventos">Eventos</option>
          <option value="politica">Política</option>
        </select>
        <button
          className="bg-blue-500 px-4 py-2 rounded-md text-zinc-200 font-semibold transition-colors hover:bg-blue-400"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
