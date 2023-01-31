import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLTextAreaElement> & {value: string};

export default function Textarea({ ...rest }: Props) {
  return (
    <textarea
      className="w-full resize-none rounded-md px-2 py-1 outline outline-zinc-500 outline-2 focus:outline-blue-500 focus:outline-2 "
      {...rest}
    />
  );
}
