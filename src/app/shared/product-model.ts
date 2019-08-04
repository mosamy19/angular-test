export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity: number;
    cartQuantity: number;
    addedToCart: boolean
}