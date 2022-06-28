import {Navbar} from "../../components";
import {Footer} from "../../components";

export default function CitizenLayouts(props) {
  return (
    <>
      <Navbar auth={props.auth} />
      <main className="layout-padding" style={{background: "var(--color-primary-light)"}}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
