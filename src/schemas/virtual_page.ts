import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Virtual_page_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.virtual_page];

export const virtual_page_list_schema: Virtual_page_list_schema = () => {
  return createSchema<IEventEnhanced.Events.virtual_page>({
    event: {
      type: "string",
      values: ["virtual_page"],
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
