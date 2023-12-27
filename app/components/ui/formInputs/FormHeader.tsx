"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

const FormHeader = ({ title, className }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`flex justify-between items-center py-4 px-8 max-w-5xl mx-auto rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 ${className} `}
    >
      <h2 className="text-2xl font-bold ">{title}</h2>
      <button
        onClick={() => router.back()}
        className="transition-colors duration-300"
      >
        <X />
      </button>
    </div>
  );
};

export default FormHeader;
