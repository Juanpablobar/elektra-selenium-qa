import { IEventEnhanced } from "#typings/events";

export function createSchema<T extends IEventEnhanced.Events>(
  schema: IEventEnhanced.MapEvents[T]
): IEventEnhanced.MapEvents[T] {
  return schema;
}

export const itemsProduct = {
  comparador: {
    type: "boolean",
    values: [true, false],
    shouldNo: [0, "", null],
    required: true,
  },
  cotizador_prestamo: {
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
  item_list_id: {
    type: "string",
    values: ["list123"],
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
  disponibilidad_en_tienda: {
    type: "boolean",
    values: [true],
    shouldNo: [0, "", null],
    required: true,
  },
  disponibilidad_de_envio: {
    type: "boolean",
    values: [true],
    shouldNo: [0, "", null],
    required: true,
  },
  disponibilidad_de_inventario: {
    type: "boolean",
    values: [true],
    shouldNo: [0, "", null],
    required: true,
  },
};

export const ItemPromotion = {
  promotion_id: {
    type: "string",
    values: ["promo123"],
    shouldNo: [0, true, false, null],
    required: true,
  },
  promotion_name: {
    type: "string",
    values: ["Discount Offer"],
    shouldNo: [0, true, false, null],
    required: true,
  },
  promotion_creative: {
    type: "string",
    values: ["Creative Content"],
    shouldNo: [0, true, false, null],
    required: true,
  },
  promotion_slot: {
    type: "string",
    values: ["slot1"],
    shouldNo: [0, true, false, null],
    required: true,
  },
};
