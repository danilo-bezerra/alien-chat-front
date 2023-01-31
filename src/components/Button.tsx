import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {};

export default function Button({ className, children, ...rest }: Props) {
  return (
    <button
      className={
        "bg-blue-500 px-4 rounded-md text-zinc-200 font-semibold transition-colors hover:bg-blue-400 " +
        className
      }
      type="submit"
      {...rest}
    >
      {children}
    </button>
  );
}
