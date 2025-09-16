import { TrendingUp } from "lucide-react";

interface Props {
  card: {
    id: string;
    title: string;
    total: number;
    per: number;
  };
}

const StatsCard = ({ card }: Props) => {
  return (
    <div
      className={`min-w-[200px] flex flex-col gap-8 p-6 ${
        card.per < 10 ? "bg-[#E5ECF6]" : "bg-[#E3F5FF]"
      } rounded-[16px]`}
    >
      <h4 className="text-sm text-black font-semibold">{card.title}</h4>
      <div className="flex justify-between">
        <span className="text-2xl font-semibold text-black">{card.total}K</span>
        <div className="flex items-center gap-4 text-black">
          <p className="text-sm">
            {card.per < 10 ? `-${card.per}` : `+${card.per}`}%
          </p>
          <TrendingUp size={16} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
