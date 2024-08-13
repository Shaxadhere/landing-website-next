import React from "react";
import Logo from "../Items/logo";
import MainMenu from "./main-menu";
import AuhtMenu from "./auth-menu";
import DrawerButton from "./drawer-button";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <DrawerButton />
          <Logo />
        </div>
        <MainMenu />
        <AuhtMenu />
      </div>
    </header>
  );
};

export default Header;
