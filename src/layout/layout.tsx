import React from "react";
import { Page } from "zmp-ui";
import BottomNavigationPage from "./bottomNavigationPage";

const Layout = ({ children }) => (
  <Page className="bg-white">
    {children}
    <BottomNavigationPage />
  </Page>
);

export default Layout;
