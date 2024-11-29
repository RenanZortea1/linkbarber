import { CalendarDemo } from '@/components/calendarComponent';
import { CommandDialogDemo } from '@/components/commandDialog'
import { DatePickerWithRange } from '@/components/dateRangePicker'
import { DialogDemo, DrawerDialogDemo } from '@/components/dialogPop';
import { DrawerComponent } from '@/components/drawerComponent';
import SchedulerComponent from '@/components/schedulerComponent'
import React from 'react'

export default function Schedule() {
  return (
    <main className="absolute h-4/5 grid grid-cols-4 w-5/6 mt-10 overflow-hidden">
        {/* Left Content: DatePicker */}
        <div className="relative flex flex-col items-center p-4">
          <CalendarDemo />
        <DialogDemo />
        </div>

        {/* Right Content: Scheduler */}
        <div className="relative w-full col-span-3 h-full p-4">
          <SchedulerComponent />
        </div>
    </main>
  );
}

