import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { items_schema } from "./items";

type Add_to_cart_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.add_to_cart];

export const add_to_cart_schema: Add_to_cart_schema = () => {
  return createSchema<IEventEnhanced.Events.add_to_cart>({
    event: {
      type: "string",
      values: ["add_to_cart"],
      shouldNo: [0, false, true],
      required: true,
    },
    total_quantity_cart: {
      type: "number",
      values: [0, 1, 2],
      shouldNo: ["string", false, true, null],
      required: true,
    },
    total_price_cart: {
      type: "number",
      values: [0, 1, 3],
      shouldNo: ["string", false, true, null, undefined],
      required: true,
    },
    page_type: {
      type: "string",
      values: ["home"],
      shouldNo: [0, false, true, null, undefined],
      required: true,
    },
    ecommerce: {
      items: [items_schema()],
    },
  });
};
