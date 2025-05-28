import React from "react";
import PageHeader from "../component/PageHeader";
import AbouUsTwo from "../component/AbouUsTwo";
import ChoseTwo from "../component/ChoseTwo";
import Working from "../component/Working";
import Blog from "../component/BlogOne";

const AboutPage = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "About Us", link: null },
  ];
  return (
    <>
      <PageHeader title="About Us" breadcrumbs={breadcrumbs}></PageHeader>
      <AbouUsTwo></AbouUsTwo>
      <ChoseTwo addClass="inner_chose"></ChoseTwo>
      <Working></Working>
      <Blog></Blog>
    </>
  );
};

export default AboutPage;
