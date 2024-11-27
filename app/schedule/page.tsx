import { CommandDialogDemo } from '@/components/commandDialog'
import { DatePickerWithRange } from '@/components/dateRangePicker'
import SchedulerComponent from '@/components/schedulerComponent'
import React from 'react'

export default function Schedule() {
  return (
    <main className="absolute h-4/5 grid w-5/6 mt-10 overflow-hidden">
        {/* Left Content: DatePicker */}
            {/*

        <div className="p-4">
          <DatePickerWithRange />
        </div>

            */}
        {/* Right Content: Scheduler */}
        <div className="relative w-full col-span-2 h-full p-4">
          <SchedulerComponent />
      </div>
    </main>
  );
}

