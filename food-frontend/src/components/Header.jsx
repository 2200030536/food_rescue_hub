import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="http://www.javaguides.net">
            Food Rescue Hub
          </a>
          {/* <Link to="/" className='navbar-brand'>
                
                </Link>
                <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                <Link to="/about" className='nav-link'>
                        About
                        </Link>
                </li>
                <li className='nav-item'>
                <Link to="/contact" className='nav-link'>
                        Contact
                        </Link>
                </li>
                </ul> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
