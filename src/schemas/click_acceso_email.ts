import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { items_schema } from "./items";

type Click_acceso_email_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_acceso_email];

export const click_acceso_email_list_schema: Click_acceso_email_list_schema = () => {
  return createSchema<IEventEnhanced.Events.click_acceso_email>({
    event: {
      type: "string",
      values: ["click_acceso_email"],
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
