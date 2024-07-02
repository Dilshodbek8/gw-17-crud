import { Link, Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/create";
import UpdateProduct from "./pages/update";
import Products from "./pages/products";

function App() {
  return (
    <div>
      <Link to={"/"}>home</Link>
      <br />
      <br />
      <Link to={"/create"}>create</Link>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
