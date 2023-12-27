"use client";

import { data } from "@/app/data";
import { useState } from "react";
import Pagination from "./Pagination";

type Props = {};

export default function CustomDataTable({}: Props) {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageCount = Math.ceil(data.length / PAGE_SIZE);
  const currentDisplayedData = data.slice(startIndex, endIndex);

  return (
    <div className="text-gray-700  bg-gray-50 dark:bg-gray-800 dark:text-gray-400 border border-slate-400 dark:border-slate-700 rounded-md">
      <h2 className="text-xl font-bold p-4">Recent Orders</h2>
      {/* Table */}

      <div className="overflow-x-auto  shadow-md sm:rounded-lg ">
        {/* w-full text-sm text-left rtl:text-right  */}
        <table className=" table table-xs ">
          <thead className="text-xs ">
            <tr className="bg-slate-300 dark:bg-slate-900">
              <th scope="col" className="px-4 py-3">
                #
              </th>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDisplayedData.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 border-slate-400 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-3 py-4">{item.id}</td>

                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-2"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.first_name}
                </th>
                <td className="px-6 py-4">{item.first_name}</td>
                <td className="px-6 py-4">{item.last_name}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        currentPage={currentPage}
        pageCount={pageCount}
        PAGE_SIZE={PAGE_SIZE}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  );
}
