import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_menu_servicios_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_menu_servicios];

export const click_menu_servicios_list_schema: Click_menu_servicios_list_schema =
  () => {
    return createSchema<IEventEnhanced.Events.click_menu_servicios>({
      event: {
        type: "string",
        values: ["click_menu_servicios"],
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
