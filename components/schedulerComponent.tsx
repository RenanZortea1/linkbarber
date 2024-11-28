"use client"

import enDayjsTranslations from "dayjs/locale/en";
import React, { useState, useCallback } from "react";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

// Extend dayjs with the isBetween plugin
dayjs.extend(isBetween);

const SchedulerComponent = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleRangeChange = useCallback((range) => {
    setRange(range);
  }, []);

const langs: LocaleType[] = [
  {
    id: "pt",
    lang: {
      feelingEmpty: "Eu me sinto tão vazio...",
      free: "Livre",
      loadNext: "Próximo",
      loadPrevious: "Anterior",
      over: "finalizado",
      taken: "Ocupado",
      topbar: {
        filters: "Filtros",
        next: "próximo",
        prev: "anterior",
        today: "Hoje",
        view: "Visualizar"
      },
      search: "buscar",
      week: "semana"
    },
      translateCode: "pt-BR",
    dayjsTranslations: enDayjsTranslations}
];

const mockedSchedulerData: SchedulerData = [
  {
    id: "1a2b3c4d-1234-5678-9abc-def012345678",
    label: {
      icon: "https://picsum.photos/24",
      title: "João Silva",
      subtitle: "Cabeleireiro",
    },
    data: [
      {
        id: "abcd1234-5678-90ab-cdef-1234567890ab",
        startDate: new Date("2024-11-25T08:00:00Z"),
        endDate: new Date("2024-11-25T10:00:00Z"),
        occupancy: 7200,
        title: "Corte Masculino",
        subtitle: "Cliente: Carlos",
        description: "Corte moderno com degradê nas laterais.",
        bgColor: "rgb(254,165,177)",
      },
      {
        id: "efgh5678-1234-5678-abcd-1234567890ef",
        startDate: new Date("2024-11-25T10:30:00Z"),
        endDate: new Date("2024-11-25T11:30:00Z"),
        occupancy: 3600,
        title: "Barba e Bigode",
        subtitle: "Cliente: André",
        description: "Barba desenhada e alinhamento do bigode.",
        bgColor: "rgb(254,165,177)",
      },
    ],
  },
  {
    id: "2b3c4d5e-6789-0123-4567-890abcdef123",
    label: {
      icon: "https://picsum.photos/24",
      title: "Mariana Costa",
      subtitle: "Esteticista",
    },
    data: [
      {
        id: "1234abcd-5678-90ef-ghij-1234567890kl",
        startDate: new Date("2024-11-25T12:00:00Z"),
        endDate: new Date("2024-11-25T13:00:00Z"),
        occupancy: 3600,
        title: "Tratamento Facial",
        subtitle: "Cliente: Paula",
        description: "Hidratação profunda e limpeza de pele.",
        bgColor: "rgb(177,221,254)",
      },
      {
        id: "5678abcd-90ef-ghij-klmn-1234567890op",
        startDate: new Date("2024-11-25T13:30:00Z"),
        endDate: new Date("2024-11-25T14:30:00Z"),
        occupancy: 3600,
        title: "Sobrancelhas",
        subtitle: "Cliente: Ana",
        description: "Design e pigmentação das sobrancelhas.",
        bgColor: "rgb(177,221,254)",
      },
    ],
  },
  {
    id: "3c4d5e6f-7890-1234-5678-9abcdef12345",
    label: {
      icon: "https://picsum.photos/24",
      title: "Pedro Oliveira",
      subtitle: "Barbeiro",
    },
    data: [
      {
        id: "abcd5678-1234-90ef-ghij-4567890klmno",
        startDate: new Date("2024-11-25T15:00:00Z"),
        endDate: new Date("2024-11-25T16:00:00Z"),
        occupancy: 3600,
        title: "Corte Infantil",
        subtitle: "Cliente: Lucas",
        description: "Corte simples para criança.",
        bgColor: "rgb(199,244,161)",
      },
      {
        id: "5678efgh-1234-abcd-ijkl-1234567890pq",
        startDate: new Date("2024-11-25T16:30:00Z"),
        endDate: new Date("2024-11-25T17:30:00Z"),
        occupancy: 3600,
        title: "Corte Clássico",
        subtitle: "Cliente: João",
        description: "Corte clássico com finalização no pente.",
        bgColor: "rgb(199,244,161)",
      },
    ],
  },
  {
    id: "4d5e6f7g-8901-2345-6789-0abcdef12345",
    label: {
      icon: "https://picsum.photos/24",
      title: "Fernanda Lima",
      subtitle: "Manicure",
    },
    data: [
      {
        id: "1234efgh-5678-ijkl-mnop-1234567890qr",
        startDate: new Date("2024-11-25T18:00:00Z"),
        endDate: new Date("2024-11-25T19:00:00Z"),
        occupancy: 3600,
        title: "Manicure Básica",
        subtitle: "Cliente: Sofia",
        description: "Corte, lixamento e esmaltação.",
        bgColor: "rgb(255,213,128)",
      },
      {
        id: "abcdijkl-5678-mnop-qrst-1234567890uv",
        startDate: new Date("2024-11-25T19:30:00Z"),
        endDate: new Date("2024-11-25T20:30:00Z"),
        occupancy: 3600,
        title: "Unhas Decoradas",
        subtitle: "Cliente: Laura",
        description: "Decoração temática com esmaltação.",
        bgColor: "rgb(255,213,128)",
      },
    ],
  },
];
  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter((project) =>
      dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
      dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
      (dayjs(project.startDate).isBefore(range.startDate, "day") &&
        dayjs(project.endDate).isAfter(range.endDate, "day"))
    ),
  }));

  return (
    <Scheduler
      data={filteredMockedSchedulerData}
      isLoading={false}
      onRangeChange={handleRangeChange}
      onTileClick={(clickedResource) => console.log(clickedResource)}
      onItemClick={(item) => console.log(item)}
      onFilterData={() => setFilterButtonState(1)}
      onClearFilterData={() => setFilterButtonState(0)}
      config={{
        zoom: 2,
        lang: "pt",
        translations: langs,
        filterButtonState,
      }}
    />
  );
};


export default SchedulerComponent;

