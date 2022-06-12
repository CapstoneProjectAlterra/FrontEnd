export default function CitizenLayouts(props) {
  return (
    <>
      <nav>Navbar</nav>
      <aside>Sidebar</aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
}
