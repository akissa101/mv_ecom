import { data } from "@/app/data";

type Props = {
  startIndex: number;
  endIndex: number;
  currentPage: number;
  pageCount: number;
  setCurrentPage: Function;
  PAGE_SIZE: number;
};

const Pagination = ({
  startIndex,
  endIndex,
  currentPage,
  pageCount,
  PAGE_SIZE,
  setCurrentPage,
}: Props) => {
  // const PAGE_SIZE = 10;
  // const [currentPage, setCurrentPage] = useState(1);
  // const startIndex = (currentPage - 1) * PAGE_SIZE;
  // const endIndex = startIndex + PAGE_SIZE;
  // const pageCount = Math.ceil(data.length / PAGE_SIZE);
  // const currentDisplayedData = data.slice(startIndex, endIndex);
  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 px-4 pb-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {startIndex + 1} - {Math.min(startIndex + PAGE_SIZE, data.length)}{" "}
        </span>
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {data.length}
        </span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-12">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
            className="flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-700 bg-white border border-gray-400 rounded-s-lg hover:bg-gray-400 dark:hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:text-white disabled:cursor-not-allowed"
          >
            Previous
          </button>
        </li>
        {Array.from({ length: pageCount }, (_, index: number) => {
          return (
            <li key={index}>
              <button
                onClick={() => setCurrentPage(index + 1)}
                disabled={currentPage === index + 1}
                className="flex items-center justify-center px-5 h-12 border leading-tight text-gray-500 bg-white  border-gray-400 hover:bg-gray-400 dark:hover:bg-gray-700 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 disabled:dark:bg-blue-700 disabled:bg-blue-700 font-bold"
              >
                {index + 1}
              </button>
            </li>
          );
        })}

        <li>
          <button
            disabled={currentPage === pageCount}
            onClick={() =>
              endIndex !== data.length && setCurrentPage(currentPage + 1)
            }
            className="flex items-center justify-center px-6 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
