import React from "react";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <h1 className="p-3">E-Shop</h1>
        </Link>

        <div className="col-md-3 text-end">
          {!isLoading && !user && (
            <Link href="/api/auth/login">
              <button className="btn btn-warning me-2" role="button">
                Login / Sign-up
              </button>
            </Link>
          )}
          {user && (
            <div className="dropdown text-end">
              <Link href="#">
                <div
                  className="d-block link-dark text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={user.picture}
                    alt="mdo"
                    width="40"
                    height="40"
                    className="rounded-circle"
                  />
                </div>
              </Link>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link href="/api/auth/me">
                    <div className="dropdown-item">Profile</div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/api/auth/logout">
                    <div className="dropdown-item text-danger">Logout</div>
                  </Link>
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
