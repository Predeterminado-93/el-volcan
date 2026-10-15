function ProductCard({product}) {
    return(
        <article>
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio.toLocaleString('es-CL')}</p>
            <button type="button">Comprar</button>
        </article>
    )
}

export default ProductCard