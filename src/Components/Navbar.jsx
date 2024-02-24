import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: '#1B0E08'}}>
  <div className="container">
    <a className="navbar-brand fs-2 fw-semibold" style={{color: 'white'}}>Florida<span style={{color: '#B78042'}}>Cafe</span></a>
    <button className="navbar-toggler shadow-none border-0" style={{backgroundColor: '#B78042'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="sidebar offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header text-white border-bottom">
        <h5 className="offcanvas-title fs-2 fw-semibold" id="offcanvasNavbarLabel">Florida<span style={{color: '#B78042'}}>cafe</span></h5>
        <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
        <Link to={'/'}>
          <li className="nav-item">
            <a className="nav-link active mx-2 me-4 fw-medium" style={{color: 'white'}} aria-current="page" href="#">Home</a>
          </li>
        </Link>
        <Link to={'/about'}>
          <li className="nav-item mx-2 me-4 fw-medium">
            <a className="nav-link" style={{color: 'white'}} href="./html/About.html">About</a>
          </li>
        </Link>
        <Link to={'/menu'}>
          <li className="nav-item mx-2 me-4 fw-medium">
            <a className="nav-link" style={{color: 'white'}} href="./html/Menu.html">Menu</a>
          </li>
        </Link>
        <Link to={'/contact'}>
          <li className="nav-item mx-2 me-4 fw-medium">
            <a className="btn fw-semibold" style={{backgroundColor: '#B78042', color: 'white'}} href="./html/Contact.html" role="button">Contact</a>
          </li>
        </Link>   
        </ul>
      </div>
    </div>
  </div>
</nav>

    )
}

export default Navbar