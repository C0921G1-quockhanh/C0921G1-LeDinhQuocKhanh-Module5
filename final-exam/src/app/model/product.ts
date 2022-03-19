import {ProductType} from "./product-type";

export interface Product {
  id?: string;
  productType?: ProductType;
  quantity?: number;
  startDay?: string;
  createDay?: string;
  endDay?: string;
}
