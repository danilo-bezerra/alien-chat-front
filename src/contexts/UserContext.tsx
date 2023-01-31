import { createContext, ReactNode, useState, useEffect } from "react";

interface userContext {
  username: string;
  saveUsername: (username: string) => void;
  destroyUsername: () => void;
  getUsername: () => string;
}

export const UserContext = createContext<userContext>({
  username: "",
  saveUsername: (s) => null,
  destroyUsername: () => null,
  getUsername: () => "",
});

type Props = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: Props) => {
  const [username, setUsername] = useState("");

  function saveUsername(username: string) {
    setUsername(username);
    localStorage.setItem("username", username);
  }

  function getUsername() {
    return localStorage.getItem("username") || '';
  }

  function destroyUsername() {
    setUsername("");
    localStorage.removeItem("username");
  }

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUsername(username);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ username, saveUsername, getUsername, destroyUsername }}
    >
      {children}
    </UserContext.Provider>
  );
};
