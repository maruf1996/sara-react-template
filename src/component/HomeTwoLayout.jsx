import { Outlet } from "react-router";
import NavbarTwo from "./NavbarTwo";
import FooterTwo from "./FooterTwo";

const HomeTwoLayout = () => {
  return (
    <>
      <NavbarTwo />
      <main>
        <Outlet />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwoLayout;
