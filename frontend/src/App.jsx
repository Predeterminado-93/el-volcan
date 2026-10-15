
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import products from './data/products'

function App() {
  return (
    <>
              
      <Header 
        nombre="El Volcán"
        mensaje="Gas para tu hogar y negocio"
        subtitulo="Tu energía, más cerca."
      />

      <main>
        <section>
          <h2>Bienvenido a El Volcán</h2>
          <p>Atención a nuestros clientes</p>
          <p>
            Conoce nuestros productos y servicios.
          </p>
          <ProductList products={products} />

          <button type="button">
            Explorar catálogo
          </button>
        </section>
      </main>

      <Footer />

      
    </>
  )
}

export default App
