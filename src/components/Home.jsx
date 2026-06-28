import { Outlet } from "react-router-dom";
import Header from "./Header";
import ProductList from "./Hooks/UseMemo";
import { useState } from "react";
import Timer from "./Hooks/UseEffectEvent";
import InputFocus from "./Hooks/UseRef";
import TransitionHook from './Hooks/UseTransition';
import SearchPage from "./Hooks/UseDeferredValue";

function Home() {
    const [products] = useState([
        {
            id: 1, 
            name: "Item1"
        },
        {
            id: 2, 
            name: "Item2"
        }
    ])

    const [theme, setThem] = useState("")

    const handleChangeTheme = () => {
      setThem("gray")
    }
  return (
    <div>
      {/* <Timer/>
      <ProductList products={products}/>
      <button onClick={handleChangeTheme}>CHange Theme</button>
      <InputFocus/>
      <TransitionHook/> */}
      <SearchPage/>
      {/* <Header/> */}
      <Outlet/>
    </div>
  )
}

export default Home;