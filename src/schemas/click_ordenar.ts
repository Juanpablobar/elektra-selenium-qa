import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_ordenar_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_ordenar];

export const click_ordenar_list_schema: Click_ordenar_list_schema =
  () => {
    return createSchema<IEventEnhanced.Events.click_ordenar>({
      event: {
        type: "string",
        values: ["click_ordenar"],
        shouldNo: [0, false, true],
        required: true,
      },
      page_type: {
        type: "string",
        values: ["home"],
        shouldNo: [0, false, true, null, undefined],
        required: true,
      },
      opcion_seleccionada: {
        type: "string",
        values: ["telefono"],
        shouldNo: [0, false, true, null, undefined],
        required: true,
      },
    });
  };
