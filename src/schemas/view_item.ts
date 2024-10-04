import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { items_schema } from "./items";

type View_item_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.view_item];

export const view_item_list_schema: View_item_list_schema = () => {
  return createSchema<IEventEnhanced.Events.view_item>({
    event: {
      type: "string",
      values: ["view_item"],
      shouldNo: [0, false, true],
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
        items_schema({
          deleteProperties: [
            "cotizador_prestamo",
            "disponibilidad_en_tienda",
            "disponibilidad_de_envio",
            "disponibilidad_de_inventario",
          ],
        }),
      ],
    },
  });
};
