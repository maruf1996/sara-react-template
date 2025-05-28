import { Outlet } from "react-router";
import NavbarOne from "./NavbarOne";
import InnerFooter from "./InnerFooter";

const InnerPageLayout = () => {
  return (
    <>
      <NavbarOne />
      <main>
        <Outlet />
      </main>
      <InnerFooter />
    </>
  );
};

export default InnerPageLayout;
