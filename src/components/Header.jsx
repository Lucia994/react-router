import { NavLink } from "react-router-dom";
const navLinks = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About us",
    path: "/about-us",
  },
  {
    title: "Products",
    path: "/products",
  },
];

export default function Header() {
  return (
    <header>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path} element={link.title} />
          </li>
        ))}
      </ul>
    </header>
  );
}
