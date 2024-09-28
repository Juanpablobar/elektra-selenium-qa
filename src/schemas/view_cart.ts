import { IEventEnhanced } from "#typings/events";
import { createSchema, itemsProduct } from "./help";

type View_cart_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.view_cart];

export const view_cart_schema: View_cart_schema = () => {
  return createSchema<IEventEnhanced.Events.view_cart>({
    event: {
      type: "string",
      values: ["view_cart"],
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
      items: [
        {
          comparador: {
            type: "boolean",
            values: [true, false],
            shouldNo: [0, "", null],
            required: true,
          },
          item_name: {
            type: "string",
            values: ["Example Item"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_id: {
            type: "string",
            values: ["item123"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          product_id: {
            type: "number",
            values: [123],
            shouldNo: ["", null, false],
            required: true,
          },
          price: {
            type: "number",
            values: [99.99],
            shouldNo: ["", null, false],
            required: true,
          },
          price_without_discount: {
            type: "number",
            values: [120],
            shouldNo: ["", null, false],
            required: true,
          },
          discount: {
            type: "number",
            values: [20],
            shouldNo: ["", null, false],
            required: true,
          },
          item_brand: {
            type: "string",
            values: ["Brand Name"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_category: {
            type: "string",
            values: ["Electronics"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_category2: {
            type: "string",
            values: ["Smartphones"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_category3: {
            type: "string",
            values: ["Mobile"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_category4: {
            type: "string",
            values: ["Gadgets"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_list_name: {
            type: "string",
            values: ["My Item List"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_variant: {
            type: "string",
            values: ["Red"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_condition: {
            type: "string",
            values: ["new"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          availability: {
            type: "boolean",
            values: [true],
            shouldNo: [0, "", null],
            required: true,
          },
          image_url: {
            type: "string",
            values: ["https://example.com/image.jpg"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_list_position: {
            type: "number",
            values: [1],
            shouldNo: ["", null, false],
            required: true,
          },
          url: {
            type: "string",
            values: ["https://example.com/item123"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          currency: {
            type: "string",
            values: ["USD"],
            shouldNo: [0, true, false, null],
            required: true,
          },
          item_referral: {
            type: "string",
            values: ["referral123"],
            shouldNo: [0, true, false, null],
            required: true,
          },
        },
      ],
    },
  });
};
