import { Category } from "./category.model";

export interface Product {
    id: number,
    category: Category;
    description: string;
    title: string,
    price: number,
    images: string[],
    creationAt : string;
}
