import React from "react";
import { FieldError } from "react-hook-form";

type Props = {
  errors: {
    id?: string;
  };
  message: string;
};

const FieldError = ({ errors }: Props) => {
  return (
    <>
      {errors.id ? (
        <span className="border text-red-600 dark:text-red-600">
          This is required field
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default FieldError;
