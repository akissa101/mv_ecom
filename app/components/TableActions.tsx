import { Plus, Search, Trash2, Upload } from "lucide-react";

type Props = {};

const TableActions = (props: Props) => {
  return (
    <div className="py-4 my-6 px-5 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between items-center gap-4">
      <button className="btn btn-outline btn-primary py-2 px-6 rounded-lg dark:bg-slate-900 hover:dark:bg-slate-800 transition-colors duration-500">
        <Upload />
        <span>Export</span>
      </button>
      <div className="flex-grow  sm:pl-16">
        <label htmlFor="table-search" className="sr-only">
          `` Search
        </label>
        <div className="relative border  ">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full sm:w-10/12 bg-gray-50 focus:ring-blue-500 focus:border-sky-500 focus:dark:border-sky-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  outline-none "
            placeholder="Search "
          />
        </div>
      </div>

      <button className="btn btn-outline btn-error py-2 px-6 rounded-lg hover:border-4 transition-all duration-300">
        <Trash2 />
      </button>
    </div>
  );
};

export default TableActions;
