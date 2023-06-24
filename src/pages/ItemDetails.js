import { useParams } from "react-router-dom";
import Items from "./Items";
import { ITEMS } from "../data/itemData";
function ItemDetails(){
    console.log('hi')
    const {id} = useParams();
    const item = ITEMS.find((item) => item.id === id);
    console.log(item);
    return (
        <>
            <main>
                <h1>ItemDetails</h1>
            </main>
            <h2>{item.title}</h2>
            <h2>{item.desciption}</h2>
            
        </>
    )
}
export default ItemDetails;