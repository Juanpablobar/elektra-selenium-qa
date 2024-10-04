import { IEventEnhanced } from "#typings/events";

type ItemsSchemaReturn<T extends keyof IEventEnhanced.ItemsProduct> = Omit< IEventEnhanced.ItemsProduct,  T>;
type ItemsSchemaReturnFull = IEventEnhanced.ItemsProduct;
type ItemsSchemaProps<T extends keyof IEventEnhanced.ItemsProduct> = { deleteProperties: [T, ...T[]]};

export function items_schema<T extends keyof IEventEnhanced.ItemsProduct>( props: ItemsSchemaProps<T>): ItemsSchemaReturn<T>;
export function items_schema(): ItemsSchemaReturnFull;
export function items_schema<T extends keyof IEventEnhanced.ItemsProduct>( props?: ItemsSchemaProps<T>): ItemsSchemaReturnFull | ItemsSchemaReturn<T> {
  const item: IEventEnhanced.ItemsProduct = {
    comparador: {
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
    currency: {
      type: "string",
      values: ["USD"],
      shouldNo: [0, true, false, null],
      required: true,
    },
    quantity: {
      type: "number",
      values: [1],
      shouldNo: ["", null, false],
      required: true,
    },
    index: {
      type: "number",
      values: [0],
      shouldNo: ["", null, false],
      required: true,
    },
    semanalidad: {
      type: "number",
      values: [4],
      shouldNo: ["", null, false],
      required: true,
    },
    vendor: {
      type: "string",
      values: ["Vendor Name"],
      shouldNo: [0, true, false, null],
      required: true,
    },
    modelo: {
      type: "string",
      values: ["Model123"],
      shouldNo: [0, true, false, null],
      required: true,
    },
    cotizador_prestamo: {
      type: "boolean",
      values: [true, false],
      shouldNo: [0, "", null],
      required: false,
    },
    item_list_id: {
      type: "string",
      values: ["list123"],
      shouldNo: [0, true, false, null],
      required: false,
    },
    disponibilidad_en_tienda: {
      type: "boolean",
      values: [true, false],
      shouldNo: [0, "", null],
      required: false,
    },
    disponibilidad_de_envio: {
      type: "boolean",
      values: [true, false],
      shouldNo: [0, "", null],
      required: false,
    },
    disponibilidad_de_inventario: {
      type: "boolean",
      values: [true, false],
      shouldNo: [0, "", null],
      required: false,
    },
  };

  if (props && props.deleteProperties && props.deleteProperties.length > 0) {
    props.deleteProperties.forEach((key) => {
      delete item[key];
    });
    return item as ItemsSchemaReturn<T>;
  }

  return item as IEventEnhanced.ItemsProduct;
}