import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Home(){
    return(
        <> 
           <Navbar/>
           <main>
                <h1>Home Page</h1>
                <Link to ="/about">About</Link>
                &nbsp;&nbsp;
                <Link to ="/items">Items</Link>
                {/* <a href="/about">About</a> */}
            </main>
        </>
    )
}
export default Home;