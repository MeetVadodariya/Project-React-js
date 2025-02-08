import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MenuList from './Components/Header/MenuList'
import Product from './Components/Product/Product'
import ProductListOne from './Components/Product/ProductOne/ProductList'
import ProductListTwo from './Components/Product/ProductTwo/ProductListTwo'  
import ProductListThree from './Components/Product/ProductThree/ProductListThree'  




function App() {

  return (
    <>
      <Header />
      <MenuList />
      <Product />
      <ProductListOne />
      <ProductListTwo />
      <ProductListThree />
      <Footer />
    </>
  )
}

export default App;
