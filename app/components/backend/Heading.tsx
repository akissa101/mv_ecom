import React from "react";

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  return <h2 className="text-2xl text-slate-500 font-bold ">{title}</h2>;
}
