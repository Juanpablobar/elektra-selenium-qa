import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_viajes_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_viajes];

export const click_viajes_list_schema: Click_viajes_list_schema = () => {
  return createSchema<IEventEnhanced.Events.click_viajes>({
    event: {
      type: "string",
      values: ["click_viajes"],
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
