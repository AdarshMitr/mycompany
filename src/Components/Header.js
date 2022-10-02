import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div className="header">
     
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">YOUR LOGO</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex ">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/about">ABOUT</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/testimonials">TESTIMONIALS</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/pricing">PRICING</Link></li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/contact">CONTACT</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/social">SOCIAL</Link>
                  </li>
                 </ul>
              </div>
            </div>
          </nav>
      
      </div>
    );
};


export default Header;