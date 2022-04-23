import { Product, listedProducts } from "./model";
import { ContractPromiseBatch, context } from 'near-sdk-as';

export function setProduct(product: Product): void {
    // check if product id already exists
    let storedProduct = listedProducts.get(product.id);
    if (storedProduct !== null) {
        throw new Error(`a product with ${product.id} already exists`);
    }
    listedProducts.set(product.id, Product.fromPayload(product));
}

export function getProduct(id: string): Product | null {
    return listedProducts.get(id);
}

export function getProducts(): Product[] {
    return listedProducts.values();
}

export function buyProduct(productId: string): void {
    const product = getProduct(productId);
    if (product == null) {
        throw new Error("product not found");
    }
    if (product.price.toString() != context.attachedDeposit.toString()) {
        throw new Error("attached deposit should equal to the product's price");
    }
    // This method takes the amount of tokens that the caller of the function has attached to the transaction and transfers them to the owner of the product.
    // We get the account of the owner of the product by accessing the owner property of the product we retrieved.
    ContractPromiseBatch.create(product.owner).transfer(context.attachedDeposit);
    product.incrementSoldAmount();
    listedProducts.set(product.id, product)
}