import { Component1 } from "@/components/barChart";
import { Component } from "@/components/pieChart";


export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-3">
      <Component />
      <Component1 />
      </div>
    </main>
  );
}
