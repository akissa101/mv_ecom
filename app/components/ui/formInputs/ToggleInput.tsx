type ToggleProps = {
  label: string;
  name: string;
  trueTitle: string;
  falseTitle: string;
  className?: string;
  isPublished: boolean;
};

export default function ToggleInput({
  label,
  name,
  trueTitle,
  falseTitle,
  className,
  isPublished,
}: ToggleProps) {
  // console.log(isPublished);

  return (
    <div
      className={`sm:col-span-2 flex flex-wrap items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-lg ${className}`}
    >
      <div className="w-full sm:w-1/3">
        <h2 className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">
          {label}
        </h2>
      </div>
      <div className="w-full sm:w-1/2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            // {...register(`${name}`)}
            name={name}
            type="checkbox"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-violet-800 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isPublished ? `${trueTitle}` : `${falseTitle}`}
          </span>
        </label>
      </div>
    </div>
  );
}
