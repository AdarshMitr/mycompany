

const Header=()=>{
    return (
        <div className="header">
     
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">YOUR LOGO</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav d-flex ">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">HOME</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#">ABOUT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">TESTIMONIALS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">PRICING</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">CONTACT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">SOCIAL</a>
                  </li>
                 </ul>
              </div>
            </div>
          </nav>
      
      </div>
    );
};


export default Header;