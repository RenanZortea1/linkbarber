import { CalendarDemo } from "@/components/calendarComponent";
import { CustomerMan } from "@/components/customerMan";
import SchedulerComponent from "@/components/schedulerComponent/scheduler";
import React from "react";

export default function Schedule() {
  return (
    <main className="min-h-screen w-[calc(100vw-25vw)] mt-10 grid grid-cols-1 xl:grid-cols-4 gap-4 ">
      <div>
      <CustomerMan />
      </div>
      <div className="!relative h-screen col-span-3 p-4 shadow rounded-lg overflow-auto ">
        <SchedulerComponent />
      </div>
    </main>
  );
}

