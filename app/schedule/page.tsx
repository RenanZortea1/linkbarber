import { CommandDialogDemo } from '@/components/commandDialog'
import { DatePickerWithRange } from '@/components/dateRangePicker'
import SchedulerComponent from '@/components/schedulerComponent'
import React from 'react'

export default function Schedule() {
  return (
    <main className="absolute h-screen w-screen overflow-hidden">
      <div className="flex w-full h-full">
        {/* Left Content: DatePicker */}
            {/*

        <div className="p-4">
          <DatePickerWithRange />
        </div>

            */}
        
        {/* Right Content: Scheduler */}
        <div className="relative w-2/3 h-4/5 p-4">
          <SchedulerComponent />
        </div>
      </div>
    </main>
  );
}

