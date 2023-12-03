import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <ProductList />
      <Cart />
    </div>
  );
}
