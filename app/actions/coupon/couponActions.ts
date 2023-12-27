"use server";

import generateCouponCode from "@/lib/generateCouponCode";
import prisma from "@/lib/prismadb";

type FormProps = FormData & {
  couponCode: string;
};

export async function addCoupon(formData: FormProps) {
  try {
    const formValues = Object.fromEntries(formData.entries());

    const { title, expiryDate, isActive } = formValues;
    const expiring = formValues.expiryDate;
    const dateObject: Date = new Date(expiring as string);
    const isoDate = dateObject.toISOString();
    const published = formValues.isActive === "on" ? true : false;

    // console.log(formValues);
    // data.isActive = isPublished;
    formData.couponCode = generateCouponCode({ title, expiryDate });
    const couponCode = formData.couponCode;

    const res = await prisma.coupon.create({
      data: { title, expiryDate: isoDate, isActive: published, couponCode },
    });

    console.log("coupon: ", res);
  } catch (error: any) {
    console.log(error);
  }

  /* 
      -title
      - code : auto generated
      - expiryData} 
    */
}
