import { NavLink } from "react-router-dom";

const activeStyles = "text-yellow-800";
const inactiveStyles = "text-white";
export const NavBar = () => {
  return (
    <nav className="space-x-10 mr-10 text-xl">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
       𝓗𝓞𝓜𝓔
      </NavLink>
      <NavLink
        to={"/products"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
       𝓟𝓡𝓞𝓓𝓤𝓒𝓣𝓞𝓢
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
       𝓒𝓞𝓝𝓣𝓐𝓒𝓣𝓞𝓢
      </NavLink>
      
      
    </nav>
  );
};
