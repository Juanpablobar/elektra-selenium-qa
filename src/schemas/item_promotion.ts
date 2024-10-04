import { IEventEnhanced } from "#typings/events";

export const item_promotion_schema = (): IEventEnhanced.ItemPromotion => {
  return {
    promotion_id: {
      type: "string",
      values: ["promo123"], 
      shouldNo: [0, false, true, null],
      required: true,
    },
    promotion_name: {
      type: "string",
      values: ["Summer Sale"], 
      shouldNo: [0, false, true, null],
      required: true,
    },
    promotion_creative: {
      type: "string",
      values: ["banner_ad"], 
      shouldNo: [0, false, true, null],
      required: true,
    },
    promotion_slot: {
      type: "string",
      values: ["top_banner"], 
      shouldNo: [0, false, true, null],
      required: true,
    },
  };
};
