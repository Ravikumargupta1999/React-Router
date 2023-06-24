import { createBrowserRouter,
         RouterProvider,
         createRoutesFromElements,
         Route 
  } from "react-router-dom";

import About from "./pages/About"
import Home from "./pages/Home"
import Items from "./pages/Items"
import Navbar from "./components/Navbar";

function App() {
  // Second way to create route
  // const routes = createRoutesFromElements(
  //   <Route path="/" element = {<Navbar/>}> 
  //      <Route index element = {<Home/>}/>
  //      <Route path = "/about" element = {<About/>}/>
  //      <Route path = "/items" element = {<Items/>}/>
  //   </Route>
  // );
  // const router = createBrowserRouter(routes);


  // First way to create route
  const router = createBrowserRouter([
    { 
      path :'/root',
      element :<Navbar/>,
      children :[
        // {path : "", element : <Home/>},
        {index : true, element : <Home/>},
        {path : "about", element :<About/>},
        {path : "items", element :<Items/>}
    ]},
  ])


  return (

    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
