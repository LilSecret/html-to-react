function NavItem({ content }) {
  return <li>{content}</li>;
}

function Header() {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        <NavItem content={"about us"} />
        <NavItem content={"info"} />
        <NavItem content={"support us"} />
      </nav>
    </header>
  );
}

export default Header;
