import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_acceso_codigo_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_acceso_codigo];

export const click_acceso_codigo_list_schema: Click_acceso_codigo_list_schema = () => {
  return createSchema<IEventEnhanced.Events.click_acceso_codigo>({
    event: {
      type: "string",
      values: ["click_acceso_codigo"],
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
