import { useParams } from "react-router-dom";
function ItemDetails(){
    console.log('hi')
    const params = useParams();
    console.log(params);
    return (
        <>
            <main>
                <h1>ItemDetails</h1>
            </main>
            <h2>{params.id}</h2>
        </>
    )
}
export default ItemDetails;