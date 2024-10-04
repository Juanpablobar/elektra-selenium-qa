import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { item_promotion_schema } from "./item_promotion";

type View_promotion_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.view_promotion];

export const view_promotion_list_schema: View_promotion_list_schema = () => {
  return createSchema<IEventEnhanced.Events.view_promotion>({
    event: {
      type: "string",
      values: ["view_promotion"],
      shouldNo: [0, false, true],
      required: true,
    },
    ecommerce: {
      items: [item_promotion_schema()],
    },
  });
};
