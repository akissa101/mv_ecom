"use server";

import prisma from "@/lib/prismadb";

type FormProps = FormData & {
  couponCode: string;
};

/*
        id- auto generated
        title
        link
        image
        isActive
    */

export async function addBanner(formData: FormData) {
  try {
    const formValues = Object.fromEntries(formData.entries());
    console.log(formData);
    const { title, link, imageUrl, isActive } = formValues;
    const published = formValues.isActive === "on" ? true : false;
    // for image upload
    formData.append("file", formValues.profile);
    formData.append("upload_preset", "karma123");
    const uploadResponse = await fetch(
      "https://api.cloudinary.com/v1_1/djhjkbjpa/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const uploadedImageData = await uploadResponse.json();
    const imageurl = uploadedImageData.secure_url;
    console.log("url: ", imageurl);

    const res = await prisma.banner.create({
      data: { title, link, isActive: published, imageurl },
    });

    console.log("coupon: ", res);
  } catch (error: any) {
    console.log(error);
  }
}
