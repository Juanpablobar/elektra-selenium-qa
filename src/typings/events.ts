type Primitive = string | number | boolean | null | undefined;
export namespace IEventEnhanced {
  interface SchemaField<T extends Primitive> {
    type: 'string' | 'number' | 'boolean';
    values: T[];
    shouldNo: Exclude<Primitive, T>[];
    required: boolean;
  }
  export enum Events {
    view_cart = "view_cart",
    // virtual_page = 'virtual_page',
    // view_promotion = 'view_promotion',
    // select_promotion = 'select_promotion',
    // click_acceso_codigo = 'click_acceso_codigo',
    // click_acceso_email = 'click_acceso_email',
    // click_inicio_sesion = 'click_inicio_sesion',
    // click_menu_servicios = 'click_menu_servicios',
    // click_viajes = 'click_viajes',
    // click_codigo_postal_header = 'click_codigo_postal_header',
    // click_ubica_tienda = 'click_ubica_tienda',
    // click_prestamo_elektra = 'click_prestamo_elektra',
    // click_menu_element = 'click_menu_element',
    view_item_list = 'view_item_list',
    select_item = 'select_item',
    view_item = 'view_item',
    // view_search_results = 'view_search_results',
    add_to_cart = 'add_to_cart',
    click_comprar = 'click_comprar',
    // remove_from_cart = 'remove_from_cart',
    // click_ordenar = 'click_ordenar',
    // click_ver_mas = 'click_ver_mas',
    // click_breadcrumb = 'click_breadcrumb',
    // click_logo = 'click_logo',
    // view_category_list = 'view_category_list',
    // select_category = 'select_category',
    // click_footer_element = 'click_footer_element',
    // comparador_motos = 'comparador_motos',

    begin_checkout = "begin_checkout",
    add_email_info = "add_email_info",
    // add_profile_info = "edd_profile_info",
    add_shipping_info = "add_shipping_info",
    add_payment_info = "add_payment_info",
    click_codigo_postal = "click_codigo_postal",
    purchase = "purchase",
  }

  export type MapEvents = {
    [Events.view_cart]: {
      event: SchemaField<string>;
      total_quantity_cart: SchemaField<number>;
      total_price_cart: SchemaField<number>;
      page_type: SchemaField<string>;
      ecommerce: {
        items: Omit<
          ItemsProduct,
          | "cotizador_prestamo"
          | "item_list_id"
          | "disponibilidad_en_tienda"
          | "disponibilidad_de_envio"
          | "disponibilidad_de_inventario"
        >[];
      };
    };
    // [Events.virtual_page]: {
    //   event: SchemaField<Events.virtual_page>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.view_promotion]: {
    //   event: SchemaField<Events.view_promotion>;
    //   ecommerce: {
    //     items: ItemPromotion[];
    //   };
    // },
    // [Events.select_promotion]: {
    //   event: SchemaField<Events.select_promotion>;
    //   ecommerce: {
    //     items: ItemPromotion[];
    //   };
    // },
    // [Events.click_acceso_codigo]: {
    //   event: SchemaField<Events.click_acceso_codigo>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_acceso_email]: {
    //   event: SchemaField<Events.click_acceso_email>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_inicio_sesion]: {
    //   event: SchemaField<Events.click_inicio_sesion>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_menu_servicios]: {
    //   event: SchemaField<Events.click_menu_servicios>;
    //   opcion_seleccionada: SchemaField<string>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_viajes]: {
    //   event: SchemaField<Events.click_viajes>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_codigo_postal_header]: {
    //   event: SchemaField<Events.click_codigo_postal_header>;
    //   value_cp: SchemaField<number>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_ubica_tienda]: {
    //   event: SchemaField<Events.click_ubica_tienda>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_prestamo_elektra]: {
    //   event: SchemaField<Events.click_prestamo_elektra>;
    //   opcion_seleccionada: SchemaField<string>;
    //   page_type: SchemaField<string>;
    // },
    [Events.view_item_list]: {
      event: SchemaField<Events.view_item_list>;
      page_type: SchemaField<string>;
      ecommerce: {
        items: Omit<
          ItemsProduct,
          'comparador' | 'cotizador_prestamo' | 'disponibilidad_en_tienda' | 'disponibilidad_de_envio' | 'disponibilidad_de_inventario'
        >[];
      };
    },
    [Events.select_item]: {
      event: SchemaField<Events.select_item>;
      page_type: SchemaField<string>;
      ecommerce: {
        items: Omit<
          ItemsProduct,
          'comparador' | 'cotizador_prestamo' | 'disponibilidad_en_tienda' | 'disponibilidad_de_envio' | 'disponibilidad_de_inventario'
        >[];
      };
    },
    [Events.view_item]: {
      event: SchemaField<Events.view_item>;
      page_type: SchemaField<string>;
      ecommerce: {
        items: Omit<
          ItemsProduct,
          'cotizador_prestamo' | 'disponibilidad_en_tienda' | 'disponibilidad_de_envio' | 'disponibilidad_de_inventario'
        >[];
      };
    },
    // [Events.view_search_results]: {
    //   event: SchemaField<Events.view_search_results>;
    //   search_term: SchemaField<string>;
    //   search_msg: SchemaField<string>;
    //   search_results: SchemaField<string>;
    //   department: SchemaField<string>;
    //   category: SchemaField<string>;
    //   category2: SchemaField<string>;
    //   category3: SchemaField<string>;
    //   ecommerce: {
    //     items: Omit<
    //       ItemsProduct,
    //       'comparador' | 'item_list_id' | 'item_list_name' | 'cotizador_prestamo' | 'disponibilidad_en_tienda' | 'disponibilidad_de_envio' | 'disponibilidad_de_inventario'
    //     >[];
    //   };
    // },
    [Events.add_to_cart]: {
      event: SchemaField<Events.add_to_cart>;
      total_quantity_cart: SchemaField<number>;
      total_price_cart: SchemaField<number>;
      page_type: SchemaField<string>;
      ecommerce: {
        items: ItemsProduct[];
      };
    },
    [Events.click_comprar]: {
      event: SchemaField<Events.click_comprar>;
      total_quantity_cart: SchemaField<number>;
      total_price_cart: SchemaField<number>;
      page_type: SchemaField<string>;
      ecommerce: {
        items: Omit<
          ItemsProduct,
          'comparador' | 'cotizador_prestamo' | 'item_list_id' | 'disponibilidad_en_tienda' | 'disponibilidad_de_envio' | 'disponibilidad_de_inventario'
        >[];
      };
    },
    // [Events.remove_from_cart]: {
    //   event: SchemaField<Events.remove_from_cart>;
    //   total_quantity_cart: SchemaField<number>;
    //   total_price_cart: SchemaField<number>;
    //   page_type: SchemaField<string>;
    //   ecommerce: {
    //     items: Omit<
    //       ItemsProduct,
    //       'cotizador_prestamo' | 'item_list_id' | 'disponibilidad_en_tienda' | 'disponibilidad_de_envio' | 'disponibilidad_de_inventario'
    //     >[];
    //   };
    // },
    // [Events.click_ordenar]: {
    //   event: SchemaField<Events.click_ordenar>;
    //   opcion_seleccionada: SchemaField<string>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_ver_mas]: {
    //   event: SchemaField<Events.click_ver_mas>;
    //   breadcrumb: SchemaField<string>;
    //   breadcrumb_lv1: SchemaField<string>;
    //   breadcrumb_lv2: SchemaField<string>;
    //   breadcrumb_lv3: SchemaField<string>;
    //   breadcrumb_lv4: SchemaField<string>;
    // },
    // [Events.click_breadcrumb]: {
    //   event: SchemaField<Events.click_breadcrumb>;
    //   breadcrumb: SchemaField<string>;
    //   breadcrumb_lv1: SchemaField<string>;
    //   breadcrumb_lv2: SchemaField<string>;
    //   breadcrumb_lv3: SchemaField<string>;
    //   breadcrumb_lv4: SchemaField<string>;
    // },
    // [Events.click_logo]: {
    //   event: SchemaField<Events.click_logo>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.click_menu_element]: {
    //   event: SchemaField<Events.click_menu_element>;
    //   section: SchemaField<string>;
    //   opcion: SchemaField<string>;
    //   page_type: SchemaField<string>;
    // },
    // [Events.comparador_motos]: {
    //   event: SchemaField<'comparador_motos'>;
    //   step: SchemaField<'inicio_comparador' | 'agregar_moto' | 'borrar_moto' | 'borrar_todos' | 'ver_detalle'>;
    //   filters: { [key: string]: string[] };
    //   ecommerce: {
    //     items: Omit<
    //       ItemsProduct,
    //       'comparador' | 'cotizador_prestamo' | 'item_list_id' | 'disponibilidad_en_tienda' | 'disponibilidad_de_envio' | 'disponibilidad_de_inventario'
    //     >[];
    //   };
    // },
    // ! CUIDADO
    [Events.begin_checkout]: {
      event: 'string';
    };
    [Events.click_codigo_postal]: {
      event: 'string';
    };
    [Events.purchase]: {
      event: 'string';
    };
    [Events.add_email_info]: {
      event: 'string';
    };
    [Events.add_payment_info]: {
      event: 'string';
    };
    [Events.add_shipping_info]: {
      event: 'string';
    };
  };

  export interface ItemsProduct {
    comparador: SchemaField<boolean>;
    cotizador_prestamo: SchemaField<boolean>;
    item_name: SchemaField<string>;
    item_id: SchemaField<string>;
    product_id: SchemaField<number>;
    price: SchemaField<number>;
    price_without_discount: SchemaField<number>;
    discount: SchemaField<number>;
    item_brand: SchemaField<string>;
    item_category: SchemaField<string>;
    item_category2: SchemaField<string>;
    item_category3: SchemaField<string>;
    item_category4: SchemaField<string>;
    item_list_id: SchemaField<string>;
    item_list_name: SchemaField<string>;
    item_variant: SchemaField<string>;
    item_condition: SchemaField<string>;
    availability: SchemaField<boolean>;
    image_url: SchemaField<string>;
    item_list_position: SchemaField<number>;
    url: SchemaField<string>;
    currency: SchemaField<string>;
    item_referral: SchemaField<string>;
    disponibilidad_en_tienda: SchemaField<boolean>;
    disponibilidad_de_envio: SchemaField<boolean>;
    disponibilidad_de_inventario: SchemaField<boolean>;
  }

  export interface ItemPromotion {
    promotion_id: SchemaField<string>;
    promotion_name: SchemaField<string>;
    promotion_creative: SchemaField<string>;
    promotion_slot: SchemaField<string>;
  }
}

interface Data {
  skuId: string;
  index: number;
  id: string;
  ean: string;
  productId: string;
  quantity: number;
  uniqueId: string;
  detailUrl: string;
  name: string;
  brand: string;
  category: string;
  productRefId: string;
  seller: string;
  sellerName: string;
  variant: string;
  skuName: string;
  price: number;
  listPrice: number;
  sellingPrice: number;
  sellingPriceWithAssemblies: number;
  measurementUnit: string;
  skuSpecifications: any[];
  imageUrl: string;
  options: any[];
  assemblyOptions: AssemblyOptions;
  referenceId: ReferenceId[];
  weekly: number;
  stockAvailable: boolean;
  shippingAvailable: boolean;
  storeAvailable: boolean;
}

interface ReferenceId {
  Key: string;
  Value: string;
  __typename: string;
}

interface AssemblyOptions {
  added: any[];
  removed: any[];
  parentPrice: number;
}

interface Images {
  cacheId: string;
  imageId: string;
  imageLabel: string;
  imageTag: string;
  imageText: string;
  imageUrl: string;
}

interface Sellers {
  commertialOffer: {
    Price: number;
    PriceWithoutDiscount: number;
    AvailableQuantity: number;
  };
}
interface Items {
  complementName: string;
  ean: string;
  images: Images[];
  itemId: string;
  measurementUnit: string;
  name: string;
  nameComplete: string;
  referenceId: [string];
  sellers: Sellers[];
  unitMultiplier: number;
  variations: [] | null;
}

interface PriceRange {
  listPrice: ListPrice;
  sellingPrice: SellingPrice;
}

interface SellingPrice {
  lowPrice: number;
}

interface ListPrice {
  highPrice: number;
}

interface Rule {
  id: string;
}

export interface Product {
  brand: string;
  brandId: number;
  cacheId: string;
  categories: [string];
  categoryId: string;
  clusterHighlights: [];
  description: string;
  items: Items[];
  link: string;
  linkText: string;
  priceRange: PriceRange;
  productClusters: [];
  productId: string;
  productName: string;
  productReference: string;
  properties: [string];
  rule: Rule;
  selectedProperties: string | null;
  skuSpecifications: [];
  specificationGroups: [string];
}

interface Data {
  currency: string;
  event: string;
  eventName: string;
  products: Product[];
}

export interface EventSearch {
  data: Data;
}

export interface SearchData {
  event: string;
  search_term: string;
  search_results: number;
  department: string;
  category: string | null;
  category2: string | null;
  category3: string | null;
  ecommerce: {
    items: IEventEnhanced.ItemsProduct[];
  };
}

interface Ecommerce {
  item_name: string | null;
  section: string;
  page_location: string;
  page_referrer: string;
  page_title: string;
  index: number;
}

export interface PayloadServices {
  event: string;
  opcion_seleccionada: string;
  page_type: string;
}

export interface PayloadPostalCode {
  event: string;
  value_cp: string;
  page_type: string;
}

export interface BreadcrumbData {
  breadcrumb: string;
  breadcrumb_lv1: string;
  breadcrumb_lv2: string;
  breadcrumb_lv3: string;
  breadcrumb_lv4: string;
}
