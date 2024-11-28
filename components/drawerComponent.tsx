"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { CalendarDemo } from "./calendarComponent"
import { DatePickerForm } from "./datePickerComponent"

export function DrawerComponent() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Abrir Caixa</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Criar Evento</DrawerTitle>
            <DrawerDescription>Preencha os detalhes do evento</DrawerDescription>
          </DrawerHeader>
          <DatePickerForm />
          <DrawerFooter>
            <Button>Confirmar</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

