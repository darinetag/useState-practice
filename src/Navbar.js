const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Time Traveller</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#4f03a7',
            borderRadius: '8px' 
          }}>Time</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;