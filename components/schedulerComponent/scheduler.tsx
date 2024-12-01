"use client"

import { Fragment, useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import { SchedulerRef } from "@aldabil/react-scheduler/types";
import { RESOURCES, EVENTS } from "./data";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

function SchedulerComponent() {
  const [mode, setMode] = useState<"default" | "tabs">("default");
  const calendarRef = useRef<SchedulerRef>(null);

  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <span>Resource View Mode: </span>
        <Button
          color={mode === "default" ? "primary" : "inherit"}
          variant={mode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => {
            setMode("default");
            calendarRef.current?.scheduler?.handleState(
              "default",
              "resourceViewMode"
            );
          }}
        >
          Default
        </Button>
        <Button
          color={mode === "tabs" ? "primary" : "inherit"}
          variant={mode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => {
            setMode("tabs");
            calendarRef.current?.scheduler?.handleState(
              "tabs",
              "resourceViewMode"
            );
          }}
        >
          Tabs
        </Button>
      </div>
<Scheduler
  ref={calendarRef}
  events={EVENTS}
  resources={RESOURCES}
  view="day"
  translations={{
    navigation: {
      month: "Mês",
      week: "Semana",
      day: "Dia",
      today: "Hoje",
      agenda: "Agenda",
    },
    form: {
      addTitle: "Adicionar Evento",
      editTitle: "Editar Evento",
      confirm: "Confirmar",
      delete: "Excluir",
      cancel: "Cancelar",
    },
    event: {
      title: "Título",
      subtitle: "Subtítulo",
      start: "Início",
      end: "Fim",
      allDay: "O dia todo",
    },
    validation: {
      required: "Obrigatório",
      invalidEmail: "E-mail inválido",
      onlyNumbers: "Apenas números permitidos",
      min: "Mínimo de {{min}} letras",
      max: "Máximo de {{max}} letras",
    },
    moreEvents: "Mais...",
    noDataToDisplay: "Nenhum dado para exibir",
    loading: "Carregando...",
  }}
  resourceFields={{
    idField: "admin_id",
    textField: "title",
    subTextField: "mobile",
    avatarField: "title",
    colorField: "color",
  }}
  fields={[
    {
      name: "admin_id",
      type: "select",
      default: RESOURCES[0].admin_id,
      options: RESOURCES.map((res) => ({
        id: res.admin_id,
        text: `${res.title} (${res.mobile})`,
        value: res.admin_id, // Should match "name" property
      })),
      config: { label: "Responsável", required: true },
    },
  ]}
  viewerExtraComponent={(fields, event) => (
    <div>
      {fields.map((field, i) => {
        if (field.name === "admin_id") {
          const admin = field.options.find(
            (fe) => fe.id === event.admin_id
          );
          return (
            <Typography
              key={i}
              style={{ display: "flex", alignItems: "center" }}
              color="textSecondary"
              variant="caption"
              noWrap
            >
              <PersonRoundedIcon /> {admin.text}
            </Typography>
          );
        }
        return null;
      })}
    </div>
  )}
/>
    </Fragment>
  );
}

export default SchedulerComponent;

