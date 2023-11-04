import { NavLink } from "react-router-dom";

export function AppHeader(props) {
  return (
    <header className="app-header">
      <section className="container">
        <h1 className="logo">Logo</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/route">Route</NavLink>
          <NavLink to="/nestedRoute">Nested Route</NavLink>
        </nav>
      </section>
    </header>
  );
}
