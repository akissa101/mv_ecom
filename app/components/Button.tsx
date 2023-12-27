interface ButtonProps {
  label?: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean;
  defaultClass?: boolean;
  outline?: boolean;
  small?: boolean;
  full?: boolean;
  Icon?: React.ElementType;
  type?: "submit" | "button";
  pending?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label = "submit",
  disabled,
  outline,
  defaultClass,
  small,
  Icon,
  full,
  pending,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      // onClick={onClick}
      className={`relative p-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-8
        rounded-lg 
        ${
          defaultClass &&
          "border hover:border-violet-950 hover:dark:border-violet-300 transition w-full text-white bg-violet-600  dark:bg-gradient-to-r dark:from-slate-900 dark:via-violet-900 dark:to-slate-900  dark:border-violet-700"
        }
        ${
          outline &&
          "bg-white dark:bg-gray-900 border-2 border-violet-700 dark:text-violet-100 text-black hover:bg-slate-300 dark:hover:opacity-70 transition-all duration-300"
        }
        ${small && "text-sm py-1 font-light bg-white dark:bg-black"}
         ${full ? "w-full" : "w-1/3"}

      `}
    >
      {Icon && <Icon size={24} />}
      {pending ? `Loading ${label} ...` : label}
    </button>
  );
};

export default Button;
