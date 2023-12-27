import React from "react";

// type Props = {
//   title: string;
// };

const generateSlug = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^\-+/, "")
    .replace(/^\-+$/, "");

  return slug;
};

export default generateSlug;
