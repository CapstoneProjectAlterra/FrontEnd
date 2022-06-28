import {Navbar} from "../../components";

export default function CitizenLayouts(props) {
  return (
    <>
      <nav>
        <Navbar auth={props.auth} />
      </nav>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
}
