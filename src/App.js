import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router-dom";

import About from "./pages/About"
import Home from "./pages/Home"
import Items from "./pages/Items"

function App() {
  // Second way to create route
  const routes = createRoutesFromElements(
    <> 
       <Route path = "/" element = {<Home/>}/>
       <Route path = "/about" element = {<About/>}/>
       <Route path = "/items" element = {<Items/>}/>
    </>
  );
  const router = createBrowserRouter(routes);


  // First way to create route
  // const router = createBrowserRouter([
  //   {path : "/", element : <Home/>},
  //   {path : "/about", element :<About/>},
  //   {path : "/items", element :<Items/>},
  // ])


  return (

    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
