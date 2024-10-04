import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_ubica_tienda_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_ubica_tienda];

export const click_ubica_tienda_list_schema: Click_ubica_tienda_list_schema = () => {
  return createSchema<IEventEnhanced.Events.click_ubica_tienda>({
    event: {
      type: "string",
      values: ["click_ubica_tienda"],
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
