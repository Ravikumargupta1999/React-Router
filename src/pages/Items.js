import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ItemDetails from "./ItemDetails";
import { ITEMS } from "../data/itemData";
function Items(){
    return(
        <> 
        
           <main>
               <h1>Items Page</h1>
           </main>
           <ul>
             
              {ITEMS.map((item) =>(
                 <li>{item.id}</li>
              ))}
           </ul>
        </>
    )
}
export default Items;