import { BarChartDash, Component1 } from "@/components/barChart";
import { Component, PieChartDash } from "@/components/pieChart";


export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-3">
        <BarChartDash />
        <PieChartDash />
      </div>
    </main>
  );
}
