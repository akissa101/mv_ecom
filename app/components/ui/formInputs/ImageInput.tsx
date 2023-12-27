import { UploadDropzone } from "@/lib/uploadThing";

import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

type ImageProps = {
  label: string;
  name?: string;
  imageUrl: string;
  // setImageUrl: Function;
  className: string;
  endpoint: string;
};

const ImageInput = ({
  label,
  name,
  imageUrl = "",
  // setImageUrl,
  className = "col-span-full",
  endpoint = "categoryImageUploader",
}: ImageProps) => {
  return (
    <div
      className={` px-4 h-64 rounded-lg w-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 ${className}`}
    >
      <div className="flex justify-between items-center mt-2">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
        >
          {label}
        </label>

        {imageUrl && (
          <button
            // onClick={() => setImageUrl("")}
            className="flex gap-3 p-1 mt-1 rounded-lg bg-slate-300 dark:bg-slate-900 border border-white "
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item Image"
          width={1000}
          height={667}
          className="w-full h-32 object-contain "
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res: any) => {
            imageUrl = res[0].url;
            toast.success("files: ", res);
            console.log("files: ", res);
          }}
          onUploadError={(error: any) => {
            console.log(`ERROR ${error.message}`);
          }}
        />
      )}
    </div>
  );
};

export default ImageInput;
