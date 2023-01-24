export class Product {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly brand: string,
        public readonly description: string,
        public readonly price: number,
        public readonly photo: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {}
}