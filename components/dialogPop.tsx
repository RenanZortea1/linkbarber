"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDemo } from "./calendarComponent";
import { InputOTPDemo } from "./inputOTP";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "./ui/input";
import { CheckboxDisabled } from "./checkBox";

export function DialogDemo() {
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customer, setCustomer] = useState("");
  const isValidPhoneNumber = /^\d{11}$/.test(phoneNumber);
  const isValidName = !customer;
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar Evento</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar um agendamento</DialogTitle>
          <DialogDescription>
            Agende o atendimento
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-4 py-4">
          <CalendarDemo />
          <div className="flex flex-col gap-2">
            <div>
              <label className="block text-sm font-medium">Nome</label>
              <Input placeholder="Digite o nome"

                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Telefone</label>
              <Input
                placeholder="Digite o telefone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mb-2"
              />
              <CheckboxDisabled isEnabled={isValidPhoneNumber} text={"Confirmar por Whatsapp"} />
            </div>
            <div>
              <p className="font-medium mt-2">Início</p>
              <InputOTPDemo />
            </div>
            <div>
              <p className="font-medium mt-2">Final</p>
              <InputOTPDemo />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Agendamento criado com sucesso!",
                  description: "Sexta-feira, 10 de fevereiro de 2023 às 17:57",
                  action: (
                    <ToastAction altText="Voltar ao agendamento para desfazer">
                      Desfazer
                    </ToastAction>
                  ),
                });
              }}
              disabled={!isValidPhoneNumber || isValidName}
            >
              Adicionar ao calendário
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

