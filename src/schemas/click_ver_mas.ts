import { IEventEnhanced } from "#typings/events";
import { breadcrumb_schema } from "./breadcrumb";
import { createSchema } from "./help";

type Click_ver_mas_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_ver_mas];

export const click_ver_mas_list_schema: Click_ver_mas_list_schema = () => {
  return createSchema<IEventEnhanced.Events.click_ver_mas>(
    breadcrumb_schema(["click_ver_mas"])
  );
};
