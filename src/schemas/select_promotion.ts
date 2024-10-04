import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { item_promotion_schema } from "./item_promotion";

type Select_promotion_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.select_promotion];

export const select_promotion_list_schema: Select_promotion_list_schema = () => {
  return createSchema<IEventEnhanced.Events.select_promotion>({
    event: {
      type: "string",
      values: ["select_promotion"],
      shouldNo: [0, false, true],
      required: true,
    },
    ecommerce: {
      items: [item_promotion_schema()],
    },
  });
};
