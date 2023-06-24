import { Link } from "react-router-dom";
function Home(){
    return(
        <> 
           <main>
                <h6>Home Page</h6>
                <Link to ="/about">About</Link>
                &nbsp;&nbsp;
                <Link to ="/items">Items</Link>
                {/* <a href="/about">About</a> */}
            </main>
        </>
    )
}
export default Home;