import React from "react";

type Props = {
  icon: React.ReactNode;
  amount: number;
  label: string;
  className: string;
};

export default function LargeCard({ icon, amount, label, className }: Props) {
  return (
    <div
      className={`rounded-lg p-6 shadow-sm shadow-gray-500 flex flex-col gap-4 items-center ${className}`}
    >
      {icon}
      <h4 className="text-xl">{label}</h4>
      <p className="text-3xl">{amount}</p>
    </div>
  );
}
