function Navbar({setPage}){
    return(
        <div className="nav">
            <h4 onClick={() => setPage('home')}>Home</h4>
            <h4 onClick={() => setPage('about')}>About</h4>
            <h4 onClick={() => setPage('items')}>Items</h4>
        </div>
    )
}

export default Navbar;