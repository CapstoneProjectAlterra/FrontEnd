import {Footer} from "../../components";
export default function CitizenLayouts(props) {
  return (
    <>
      <nav>Navbar</nav>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
