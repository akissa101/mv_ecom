import MenuItem from "@/components/MenuItem";
import Link, { LinkProps } from "next/link";
import React, { HTMLProps, ReactNode } from "react";
import { UrlObject } from "url";

type Props = {
  className?: string;
  label: string;
  icon: ReactNode;
  link?: string;
  arrow?: ReactNode;
};

const InnerDropMenu = ({ label, icon, className, link, arrow }: Props) => {
  return (
    <li
      className={`cursor-pointer  text-[1rem]  hover:border-l-4 hover:border-slate-400 hover:dark:bg-slate-800 hover:bg-slate-300 {className}`}
    >
      <div
        tabIndex={0}
        role="button"
        className="dropdown dropdown-endflex justify-between w-full "
      >
        <div className="w-full ">
          <div className="flex gap-4 p-2 w-full dark:text-teal-300 text-teal-600 ">
            {icon}
            <span className="text-start flex-grow dark:text-teal-50 text-teal-800 ">
              {label}
            </span>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu shadow-md dark:bg-slate-800 bg-slate-400  shadow-slate-600  rounded-box w-52"
          >
            <MenuItem label="Attributes" link="/dashboard/attributes" />
            <MenuItem label="Bnners" link="/dashboard/banners" />
            <MenuItem label="Categories" link="/dashboard/categories" />
            <MenuItem label="coupones" link="/dashboard/coupones" />
            <MenuItem label="Products" link="/dashboard/products" />
          </ul>
        </div>
        <span className=""> {arrow}</span>
      </div>
    </li>
  );
};

export default InnerDropMenu;
