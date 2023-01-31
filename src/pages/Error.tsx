import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Error({}: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return <div className="w-screen h-screen bg-zinc-900"></div>;
}
