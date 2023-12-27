"use client";

import Link, { LinkProps } from "next/link";
import React, { HTMLProps, ReactNode } from "react";

type Props = {
  className?: string;
  label: string;
  icon?: ReactNode;
  link?: string;
};

const MenuItem = ({ label, icon, className, link }: Props) => {
  return (
    <li
      className={`cursor-pointer text-[1rem] hover:border-l-4 hover:border-slate-400 hover:dark:bg-slate-700 hover:bg-slate-300 ${className}`}
    >
      <Link href={`${link}`} className="focus:bg-slate-600 ">
        <div className="flex dark:text-teal-300 text-teal-600 p-2 gap-4 w-full">
          {icon}
          <span className="flex-1 text-start dark:text-teal-50 text-teal-800">
            {label}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
