import React from "react";

type Props = {
  icon: React.ReactNode;
  amount: number;
  label: string;
  className?: string;
};

export default function SmallCard({ icon, amount, label, className }: Props) {
  return (
    <div className="rounded-lg p-6 shadow-md shadow-gray-600 flex bg-slate-50  dark:bg-slate-700 gap-6 items-center ">
      <div className={`rounded-full p-4 ${className}`}>{icon}</div>

      <div className="flex flex-col gap-2">
        <h4 className="text-xl">{label}</h4>
        <p className="text-3xl">{amount}</p>
      </div>
    </div>
  );
}
