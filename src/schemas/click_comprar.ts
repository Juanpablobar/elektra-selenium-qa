import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { items_schema } from "./items";

type Click_comprar_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.click_comprar];

export const click_comprar_schema: Click_comprar_schema = () => {
  return createSchema<IEventEnhanced.Events.click_comprar>({
    event: {
      type: "string",
      values: ["click_comprar"],
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
            "comparador",
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
