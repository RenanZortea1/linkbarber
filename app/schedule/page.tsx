import { CalendarDemo } from "@/components/calendarComponent";
import { DialogDemo } from "@/components/dialogPop";
import SchedulerComponent from "@/components/schedulerComponent/scheduler";
import React from "react";

export default function Schedule() {
  return (
    <main className="min-h-screen w-[calc(100vw-25vw)] mt-10 grid grid-cols-1 xl:grid-cols-4 gap-4 ">
      <div className="relative hidden xl:flex flex-col w-full items-center p-4 bg-white shadow rounded-lg">
        <CalendarDemo />
        <DialogDemo />
      </div>

      <div className="!relative h-screen col-span-3 p-4 bg-white shadow rounded-lg overflow-auto ">
        <SchedulerComponent />
      </div>
    </main>
  );
}

