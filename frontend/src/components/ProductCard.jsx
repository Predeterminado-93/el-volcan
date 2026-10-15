function ProductCard({product}) {
    return(
        <article className="product-card">
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p className="product-price">
                Precio: ${product.precio.toLocaleString('es-CL')}
            </p>
            <button type="button">Comprar</button>
        </article>
    )
}

export default ProductCard