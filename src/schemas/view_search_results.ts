import { IEventEnhanced } from "#typings/events";
import { createSchema } from "./help";
import { items_schema } from "./items";

type View_search_results_list_schema =
  () => IEventEnhanced.MapEvents[IEventEnhanced.Events.view_search_results];

export const view_search_results_list_schema: View_search_results_list_schema =
  () => {
    return createSchema<IEventEnhanced.Events.view_search_results>({
      event: {
        type: "string",
        values: ["view_search_results"],
        shouldNo: [0, false, true],
        required: true,
      },
      search_term: {
        type: "string",
        values: ["example search"],
        shouldNo: [0, false, true, null],
        required: true,
      },
      search_msg: {
        type: "string",
        values: ["Search results found"],
        shouldNo: [0, false, true, null],
        required: true,
      },
      search_results: {
        type: "string",
        values: ["result1", "result2"],
        shouldNo: [0, false, true, null],
        required: true,
      },
      department: {
        type: "string",
        values: ["Electronics"],
        shouldNo: [0, false, true, null],
        required: true,
      },
      category: {
        type: "string",
        values: ["Smartphones"],
        shouldNo: [0, false, true, null],
        required: true,
      },
      category2: {
        type: "string",
        values: ["Android"],
        shouldNo: [0, false, true, null],
        required: false,
      },
      category3: {
        type: "string",
        values: ["Flagship"],
        shouldNo: [0, false, true, null],
        required: false,
      },
      ecommerce: {
        items: [
          items_schema({
            deleteProperties: [
              "comparador",
              "item_list_id",
              "item_list_name",
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
