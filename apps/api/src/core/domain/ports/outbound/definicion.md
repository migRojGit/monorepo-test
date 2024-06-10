los puertos de salida que interactúan con el mundo exterior es decir fuera de la capa de dominio y se relacionan con tecnologías o sistemas en este ejemplo son repositorios así que los adaptadores que implementen estas interfaces se comunicaran con alguna base de datos o método de persistencia cosa que el dominio no le interesa saber
`
EJEMPLO
``````
export interface CategoryRepository {
    findById(id: number): Promise<Category>;
    findAll(): Promise<Category[]>
}

export interface SupplierRepository {
    findById(id: number): Promise<Supplier>;
}

export interface ProductRepository {
    save(product: Product): Promise<Product>;
}