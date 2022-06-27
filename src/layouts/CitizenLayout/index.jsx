import {Navbar} from "../../components";

export default function CitizenLayouts(props) {
  return (
    <>
      <nav>
        <Navbar type={props.type} />
      </nav>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </>
  );
}
