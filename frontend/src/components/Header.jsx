function Header({ nombre, mensaje, subtitulo } ) {
    return(
        <header>
            <h1>{nombre}</h1>
                <p>{mensaje}</p>
                <p>{subtitulo}</p>
        </header>
        )
}

export default Header