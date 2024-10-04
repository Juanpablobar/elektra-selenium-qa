import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { items_schema } from "./items";

type Select_item_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.select_item];

export const select_item_list_schema: Select_item_list_schema = () => {
  return createSchema<IEventEnhanced.Events.select_item>({
    event: {
      type: "string",
      values: ["select_item"],
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
            "comparador",
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
