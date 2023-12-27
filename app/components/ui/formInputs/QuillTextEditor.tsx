"use client";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";

type QuillProps = {
  label: string;
  className?: string;
  value: string;
  onChange: any;
};

const QuillTextEditor = ({ label, className, value, onChange }: QuillProps) => {
  // Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  // content star
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="border-red rounded-lg"
      />
    </div>
  );
};

export default QuillTextEditor;
