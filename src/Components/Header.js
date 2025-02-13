import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return React.createElement(
    "header",
    {
      style: {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem"
      }
    },
    // Left side: Harvest logo
    React.createElement(
      "div",
      {
        style: {
          color: "green",
          fontSize: "1.5rem",
          fontWeight: "bold"
        }
      },
      "Harvest"
    ),
    // Right side: Navigation
    React.createElement(
      "nav",
      { style: { display: "flex", alignItems: "center", gap: "2rem" } },
      React.createElement(
        Link,
        {
          to: "/home",
          style: {
            color: "black",
            textDecoration: "none",
            fontSize: "1rem"
          }
        },
        "Home"
      ),
      React.createElement(
        Link,
        {
          to: "/factories",
          style: {
            color: "black",
            textDecoration: "none",
            fontSize: "1rem"
          }
        },
        "Factories"
      )
    )
  );
};

export default Header;