import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_codigo_postal_header_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_codigo_postal_header];

export const click_codigo_postal_header_list_schema: Click_codigo_postal_header_list_schema =
  () => {
    return createSchema<IEventEnhanced.Events.click_codigo_postal_header>({
      event: {
        type: "string",
        values: ["click_codigo_postal_header"],
        shouldNo: [0, false, true],
        required: true,
      },
      page_type: {
        type: "string",
        values: ["home"],
        shouldNo: [0, false, true, null, undefined],
        required: true,
      },
      value_cp: {
        type: "number",
        values: [4],
        shouldNo: ["", null, false],
        required: true,
      },
    });
  };
