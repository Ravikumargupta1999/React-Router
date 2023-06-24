import { useState } from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Items from "./pages/Items"

function App() {
  const [page, setPage] = useState("items");
  return (

    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "items" && <Items />}
    </>
  );
}

export default App;
