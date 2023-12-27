import { Coupon } from "@prisma/client";

type CouponProps = {
  title: string;
  expiryDate: Date;
};

const generateCouponCode = ({ title, expiryDate }: CouponProps) => {
  // format title
  const formatedTitle = title.toUpperCase().replace(/\s+/g, "");
  // format expiry data
  const dt = new Date(expiryDate);
  const formatExpiryDate = dt
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("");

  // generate coupon
  const couponCode = `${formatedTitle}-${formatExpiryDate}`;
  return couponCode;
};

export default generateCouponCode;
