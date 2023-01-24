import { Product } from "Models/product";

export class productsDTO {
    constructor(
        public readonly count: number,
        public readonly products: Array<Product>
    ) {}
}