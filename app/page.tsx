import AppChartBar from "@/components/AppChartBar";
import CardList from "@/components/CardList";
import StatsCard from "@/components/StatsCard";

interface Card {
  id: string;
  title: string;
  total: number;
  per: number;
}

const getStats = async () => {
  try {
    const res = await fetch("http://localhost:5000/stats");
    return res.json();
  } catch (error) {
    console.warn(`⚠️ JSON Server not running`);
  }
};

const getChartData = async () => {
  try {
    const res = await fetch("http://localhost:5000/chartData");
    return res.json();
  } catch (error) {
    console.warn(`⚠️ JSON Server not running`);
  }
};

export default async function Home() {
  const statsList = await getStats();
  const chartData = await getChartData();
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-4 gap-4">
      <div className="p-4 bg-primary-foreground rounded-lg col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {statsList?.map((card: Card) => (
          <StatsCard key={card.id} card={card} />
        ))}
      </div>
      <div className="p-4 bg-primary-foreground rounded-lg col-span-4 xl:col-span-3">
        <AppChartBar chartData={chartData} />
      </div>
      <div className="max-md:col-span-4 p-6 bg-primary-foreground rounded-lg">
        <CardList title="Trafic By Website" />
      </div>
    </div>
  );
}
