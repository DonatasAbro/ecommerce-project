import React from "react";

import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <h1 className="p-3">E-Shop</h1>
        </a>

        <div className="col-md-3 text-end">
          {!isLoading && !user && (
            <a
              href="/api/auth/login"
              class="btn btn-warning me-2"
              role="button"
            >
              Login / Sign-up
            </a>
          )}
          {user && (
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.picture}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="/api/auth/me">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/api/auth/logout">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
