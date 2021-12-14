import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    {
      to: "/",
      title: "Home Page"
    },
    {
      to: "/contact",
      title: "Contact Page"
    },
    {
      to: "/about-us",
      title: "About Page"
    },
    {
      to: "/services",
      title: "Services Page"
    },
    {
      to: "/login",
      title: "Login Page"
    }
  ];
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {links.map((item) => (
          <Link to={item.to}>
            <div>{item.title}</div>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default NavBar;
