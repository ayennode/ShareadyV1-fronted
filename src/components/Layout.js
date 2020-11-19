import React from "react";
import { Header, Footer } from "./organism";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Content = ({ children }) => <>{children}</>;
