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
    <header className="d-flex justify-content-end">
      <ul className="d-flex list-unstyled align-items-center px-4 py-3">
        {navLinks.map((link, index) => (
          <li className="me-3" key={index}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
