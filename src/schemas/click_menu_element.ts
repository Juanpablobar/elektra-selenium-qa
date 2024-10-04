import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_menu_element_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_menu_element];

export const click_menu_element_list_schema: Click_menu_element_list_schema =
  () => {
    return createSchema<IEventEnhanced.Events.click_menu_element>({
      event: {
        type: "string",
        values: ["click_menu_element"],
        shouldNo: [0, false, true],
        required: true,
      },
      page_type: {
        type: "string",
        values: ["home"],
        shouldNo: [0, false, true, null, undefined],
        required: true,
      },
      section: {
        type: "string",
        values: ["telefono"],
        shouldNo: [0, false, true, null, undefined],
        required: true,
      },
      opcion: {
        type: "string",
        values: ["otro"],
        shouldNo: [0, false, true, null, undefined],
        required: true,
      },
    });
  };
