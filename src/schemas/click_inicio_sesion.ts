import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_inicio_sesion_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_inicio_sesion];

export const click_inicio_sesion_list_schema: Click_inicio_sesion_list_schema =
  () => {
    return createSchema<IEventEnhanced.Events.click_inicio_sesion>({
      event: {
        type: "string",
        values: ["click_inicio_sesion"],
        shouldNo: [0, false, true],
        required: true,
      },
      page_type: {
        type: "string",
        values: ["home"],
        shouldNo: [0, false, true, null, undefined],
        required: true,
      },
    });
  };
