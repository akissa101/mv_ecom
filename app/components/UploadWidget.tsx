"use client";

import { CldUploadWidget } from "next-cloudinary";

type Props = {};

const UploadWidget = (props: Props) => {
  return (
    <div>
      <CldUploadWidget
        uploadPreset="karma123
      "
      >
        {({ open }) => {
          function handleOnClick() {
            // e.preventDefault();
            open();
          }
          return (
            <button
              className="bg-blue-900 py-2 px-4 mt-3 rounded-lg"
              onClick={handleOnClick}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadWidget;
