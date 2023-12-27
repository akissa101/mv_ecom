import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { OptionProps } from "@/types";
import { defaultOverrides } from "next/dist/server/require-hook";

type SelectProps = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  options: any;
  defaultValue?: string;
  multiple: boolean;
};

export default function SelectInput({
  label,
  name,
  register,
  errors,
  disabled,
  defaultValue,
  className = "sm:col-span-2",
  options = [],
}: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium leading-6 ">
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="  block w-full rounded-md border0 p-4 focus:border ring-0 `bg-slate-200 dark:bg-slate-900 border  focus:border-blue-400 focus:dark:border-slate-600  outline-none sm:text-sm sm:leading-6 placeholder:text-gray-600"
        >
          <option value="" disabled>
            select {`${name}`}
          </option>
          {options.map((option: OptionProps, i: number) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

// const SelectInput = ({
//   label,
//   name,
//   register,
//   errors,
//   disabled,
//   required,
//   defaultValue,
//   className = "sm:col-span-2",
//   options,
//   multiple = false,
// }: SelectProps) => {
//   return (
//     // <div className={` ${className}`}>
//     //   <label
//     //     htmlFor={name}
//     //     className="block text-sm font-medium leading-6 mb-1"
//     //   >
//     //     {label}
//     //   </label>
//     //   <select
//     //     {...register(`${name}`)}
//     //     name={name}
//     //     id={name}
//     //     multiple={multiple}
//     //     disabled={disabled}
//     //     required={required}
//     //     defaultValue={defaultValue}
//     //     autoComplete={name}
//     //     className="block w-full rounded-md border0 p-4 focus:border ring-0 `bg-slate-200 dark:bg-slate-900 border  focus:border-blue-400 focus:dark:border-slate-600  outline-none sm:text-sm sm:leading-6 placeholder:text-gray-600"
//     //   >
//     //     <option value="" disabled>
//     //       {label}
//     //     </option>
//     //     {options.map((item: MarketProps) => (
//     //       <option key={item.id} value={item.id}>
//     //         {item.title}
//     //       </option>
//     //     ))}
//     //   </select>
//     //   {errors[`${name}`] && (
//     //     <span className="text-sm text-red-600">{label} is required</span>
//     //   )}
//     // </div>
//   );
// };

// export default SelectInput;
