import { IEventEnhanced } from "#typings/events";

export const breadcrumb_schema = (
  valuesEvent: string[]
): IEventEnhanced.MapEvents[IEventEnhanced.Events.click_breadcrumb] => {
  return {
    event: {
      type: "string",
      values: valuesEvent,
      shouldNo: [0, false, true, null],
      required: true,
    },
    breadcrumb: {
      type: "string",
      values: ["Home > Category > Subcategory"],
      shouldNo: [0, false, true, null],
      required: true,
    },
    breadcrumb_lv1: {
      type: "string",
      values: ["Home"],
      shouldNo: [0, false, true, null],
      required: true,
    },
    breadcrumb_lv2: {
      type: "string",
      values: ["Category"],
      shouldNo: [0, false, true, null],
      required: true,
    },
    breadcrumb_lv3: {
      type: "string",
      values: ["Subcategory"],
      shouldNo: [0, false, true, null],
      required: true,
    },
    breadcrumb_lv4: {
      type: "string",
      values: ["Item Details"],
      shouldNo: [0, false, true, null],
      required: true,
    },
  };
};
