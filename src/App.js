import Customcontext from "./Context";
import Filter from "./components/filter/Filter";
import Nav from "./components/nav/Nav";
import ProductListening from "./components/products/ProductListening";

function App() {
  return (
    <Customcontext>
      <Nav />
      <main>
        <Filter />
        <ProductListening />
      </main>
    </Customcontext>
  );
}

export default App;
