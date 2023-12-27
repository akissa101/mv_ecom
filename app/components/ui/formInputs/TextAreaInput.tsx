import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TextareaProps = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isRequired: boolean;
  type?: string;
  className?: string;
};

export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
}: TextareaProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 ml-2 "
      >
        {label}
      </label>
      <div className="">
        <textarea
          // {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block w-full rounded-md border0 p-4 focus:border ring-0 `bg-slate-200 dark:bg-slate-900 border  focus:border-blue-400 focus:dark:border-slate-600  outline-none sm:text-sm sm:leading-6 placeholder:text-gray-6006"
          defaultValue={""}
        />
        {/* {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )} */}
      </div>
    </div>
  );
}
