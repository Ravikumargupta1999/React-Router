import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage(){
    const navigate = useNavigate();

    useEffect(()=>{
        // setTimeout(()=> navigate("/"),3000);
        setTimeout(()=> navigate(-1),3000);
    },[])
    return(
        <> 
       
           
               <h1>OOPS!Something Went Wrong</h1>
           
         
        </>
    )
}
export default ErrorPage;