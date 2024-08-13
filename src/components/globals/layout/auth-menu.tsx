import React from "react";
import MainMenuItem from "./main-menu-item";

interface Props {}

const AuhtMenu: React.FC<Props> = () => {
  return (
    <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
      <MainMenuItem link="/login" title="Login" />
      <MainMenuItem
        link="/signup"
        title="Sign Up"
        className={
          "rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700"
        }
      />
    </nav>
  );
};

export default AuhtMenu;
