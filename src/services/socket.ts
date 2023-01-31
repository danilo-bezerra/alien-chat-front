import IO from "socket.io-client";

export const socket = IO("http://localhost:3333/");
