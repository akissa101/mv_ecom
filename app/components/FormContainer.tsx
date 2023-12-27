import React, { BaseSyntheticEvent } from "react";

type FormContainerProps = {
  children: React.ReactNode;
  action: any;
  className?: string;
};

const FormContainer = ({ children, action, className }: FormContainerProps) => {
  return (
    <form
      action={action}
      className={`w-full max-w-3xl mx-auto p-4 sm:p-8 my-12 border  border-slate-300 rounded-lg bg-violet-300 dark:bg-gray-800 dark:border-gray-700 space-y-5 shadow-md shadow-gray-700 ${className}`}
    >
      {children}
    </form>
  );
};
export default FormContainer;
