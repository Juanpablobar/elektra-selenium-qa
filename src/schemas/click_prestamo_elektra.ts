import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_prestamo_elektra_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_prestamo_elektra];

export const click_prestamo_elektra_list_schema: Click_prestamo_elektra_list_schema =
  () => {
    return createSchema<IEventEnhanced.Events.click_prestamo_elektra>({
      event: {
        type: "string",
        values: ["click_prestamo_elektra"],
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
