los puertos de entrada representan piezas de software que interactúan con el dominio y pueden cambiar el estado del dominio

EJEMPLO
````
export interface CategoryService {
    findById(id: number): Promise<Category>;
    findAll(): Promise<Category[]>;
}

export interface SupplierRepository {
    findById(id: number): Promise<Supplier>;
}

export interface ProductService {
    save(product: Product): Promise<Product>;
    validateProductPrice(product: Product): boolean;
}