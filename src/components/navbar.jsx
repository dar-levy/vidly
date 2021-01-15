import React, { Component } from "react/cjs/react.production.min";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Navbar
              <span className="badge badge-pill badge-secondary"></span>
              {this.props.totalCounters}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
