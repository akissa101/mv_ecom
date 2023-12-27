import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: string;
  icon: ReactNode;
  href: string;
  className?: string;
  btnLabel: string;
};

const PageHeader = ({ title, icon, href, className, btnLabel }: Props) => {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-xl  ${className} `}
    >
      <h2 className="text-2xl text-slate-500 font-bold ">{title}</h2>
      <Link
        href={href}
        className="btn bg-purple-900 font-bold hover:bg-purple-900/70 transition-colors duration-300"
      >
        {icon} <span> {btnLabel}</span>
      </Link>
    </div>
  );
};

export default PageHeader;
