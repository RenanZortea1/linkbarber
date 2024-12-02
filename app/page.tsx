import { BarChartDash, Component1 } from "@/components/barChart";
import { Card } from "@/components/card";
import { Component, PieChartDash } from "@/components/pieChart";
import { RadialChart } from "@/components/radialChart";

export default function Home() {
  const user = "Renan";

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Bom dia";
    } else if (currentHour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

const cardData = [
  { cardTitle: "Performance Metrics", description: "Overview of the data.", percentage: 75 },
  { cardTitle: "User Engagement", description: "Track user interactions.", percentage: 60 },
  { cardTitle: "Revenue Growth", description: "Monthly revenue trends.", percentage: 85 },
  { cardTitle: "Customer Feedback", description: "Insights from customers.", percentage: 50 },
];

  return (
    <main className="p-8">
      <div className="text-gray-800 text-2xl font-bold mb-6">
        {`${getGreeting()}, ${user}`}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            cardTitle={card.cardTitle}
            description={card.description}
            percentage={card.percentage}
          />
        ))}
      </div>
    </main>
  );
}

