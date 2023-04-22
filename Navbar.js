import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid text-primary">
            <a className="navbar-brand text-primary fw-bold px-5" href="#">
              <span className="text-white">MED</span><span className="text-primary">cord</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="position-relative">
            <div
              className="collapse navbar-collapse position-relative mx-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-primary" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white"  href="#">
                    Log in
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Sign up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white">Support</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
