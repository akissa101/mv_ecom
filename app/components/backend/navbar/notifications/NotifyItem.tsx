import { X } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
  label: string;
  icon: React.ReactNode;
};

export default function NotifyItem({ label, icon, className }: Props) {
  return (
    <li className={`w-full   text-[1rem] ${className}`}>
      <div className="flex items-center gap-2 w-full p-0 rounded-none border-b border-slate-400">
        <button className="flex flex-1 items-center gap-4 py-2 px-3 hover:bg-slate-300">
          <span className="p-1 bg-slate-400 text-gray-600 text-sm rounded-full">
            {icon}
          </span>

          <div className="flex flex-col items-start  text-sm">
            <p>{label}</p>
            <div className="flex gap-4 ">
              <p className="rounded-full bg-green-800 text-white px-1 ">
                In Stock
              </p>
              <p className="text-gray-600 italic ">In Date</p>
            </div>
          </div>
        </button>

        <button className="hover:bg-rose-300 p-2 text-rose-700">
          <X className="font-bold text-sm" />
        </button>
      </div>
    </li>
  );
}
