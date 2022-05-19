import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-primary" to="/">Thrift Friend</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Inventory
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                <NavLink className="text-dark nav-link" to="/brands">List of Brands</NavLink>
              </a>
              <a className="dropdown-item" href="#">
                <NavLink className="text-dark nav-link" to="/brands/new">Add A Brand</NavLink>
              </a>
              {/* <a className="dropdown-item" href="#">
                <NavLink className="text-dark nav-link" to="/models">Models</NavLink>
              </a>
              <a className="dropdown-item" href="#">
                <NavLink className="text-dark nav-link" to="/models/new">Add Model</NavLink>
              </a>
              <a className="dropdown-item" href="#">
                <NavLink className="text-dark nav-link" to="/automobiles">Automobiles</NavLink>
              </a>
              <a className="dropdown-item" href="#">
                <NavLink className="text-dark nav-link" to="/automobiles/new">Add Automobile</NavLink>
              </a> */}
            </div>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;