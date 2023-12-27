import LargeCard from "./LargeCard";
import { Layers3 } from "lucide-react";

type Props = {};

export default function LargeCards({}: Props) {
  return (
    <div className="py-8 grid gap-3 grid-cols-1 ms:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 text-black">
      <LargeCard
        icon={<Layers3 />}
        label="Today Orders"
        amount={342}
        className="bg-blue-300/60"
      />
      <LargeCard
        icon={<Layers3 />}
        label="Today Orders"
        amount={342}
        className="bg-green-300/60"
      />
      <LargeCard
        icon={<Layers3 />}
        label="Today Orders"
        amount={342}
        className="bg-orange-300/60"
      />
      <LargeCard
        icon={<Layers3 />}
        label="Today Orders"
        amount={342}
        className="bg-purple-300/60"
      />
    </div>
  );
}
