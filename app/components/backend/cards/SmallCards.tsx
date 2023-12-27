import LargeCard from "./LargeCard";
import {
  ShoppingCart,
  CircleDashed,
  CheckCheck,
  RefreshCcw,
} from "lucide-react";
import SmallCard from "./SmallCard";

type Props = {};

export default function SmallCards({}: Props) {
  return (
    <div className=" grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4">
      <SmallCard
        icon={<ShoppingCart />}
        label="Total Orders"
        amount={342}
        className="bg-blue-600"
      />
      <SmallCard
        icon={<CircleDashed />}
        label="Orders Pending"
        amount={342}
        className="bg-green-600"
      />
      <SmallCard
        icon={<RefreshCcw />}
        label="Oders Processing"
        amount={342}
        className="bg-orange-600"
      />
      <SmallCard
        icon={<CheckCheck />}
        label="Order Delivered"
        amount={342}
        className="bg-purple-600"
      />
    </div>
  );
}
