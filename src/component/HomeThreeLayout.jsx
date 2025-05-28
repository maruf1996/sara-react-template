import { Outlet } from "react-router";
import NavbarThree from "./NavbarThree";
import FooterThree from "./FooterThree";

const HomeThreeLayout = () => {
  return (
    <>
      <NavbarThree />
      <main>
        <Outlet />
      </main>
      <FooterThree />
    </>
  );
};

export default HomeThreeLayout;
