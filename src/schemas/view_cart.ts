import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { items_schema } from "./items";

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
        items_schema({
          deleteProperties: [
            "cotizador_prestamo",
            "item_list_id",
            "disponibilidad_en_tienda",
            "disponibilidad_de_envio",
            "disponibilidad_de_inventario",
          ],
        }),
      ],
    },
  });
};
