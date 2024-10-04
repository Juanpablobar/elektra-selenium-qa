import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";

type Click_logo_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_logo];

export const click_logo_list_schema: Click_logo_list_schema = () => {
  return createSchema<IEventEnhanced.Events.click_logo>({
    event: {
      type: "string",
      values: ["click_logo"],
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
