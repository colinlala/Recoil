import './App.css'
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { RecoilRoot } from "recoil";

function App() {
  
  return (
    <RecoilRoot>
      <Routes>
        <Header />
        <Route>
          <Route exact path="/" component={Catalog} />
          <Route path="/cart" component={Cart} />
        </Route>
      </Routes>
    </RecoilRoot>
  )
}

export default App
