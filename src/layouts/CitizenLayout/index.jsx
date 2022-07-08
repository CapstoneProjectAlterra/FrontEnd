import {Helmet} from "react-helmet-async";
import {Navbar, ReactHelmet} from "../../components";
import {Footer} from "../../components";

export default function CitizenLayouts(props) {
  return (
    <>
      <ReactHelmet />
      <Navbar auth={props.auth} />
      <main
        className={props.padding === false ? "layout" : "layout-padding"}
        style={{background: "var(--color-primary-light)"}}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
}
