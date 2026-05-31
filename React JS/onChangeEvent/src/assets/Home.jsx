import React from "react";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#">
          MyApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Welcome to MyApp</h1>
        <p className="lead">React + Bootstrap CDN Setup</p>
        <button className="btn btn-light btn-lg mt-3">Get Started</button>
      </div>

      {/* Features */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5>Fast</h5>
                <p>Quick setup using CDN, no installs needed.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5>Simple</h5>
                <p>Clean layout using Bootstrap classes.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h5>Responsive</h5>
                <p>Works on mobile, tablet, and desktop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 MyApp</p>
      </footer>
    </div>
  );
};

export default Home;
