import { IEventEnhanced } from "#typings/events";
import { breadcrumb_schema } from "./breadcrumb";
import { createSchema } from "./help";

type Click_breadcrumb_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_breadcrumb];

export const click_breadcrumb_list_schema: Click_breadcrumb_list_schema = () => {
  return createSchema<IEventEnhanced.Events.click_breadcrumb>(
    breadcrumb_schema(["click_breadcrumb"])
  );
};
