import React from "react";
import MainMenuItem from "./main-menu-item";
import { mainMenu } from "@/constants/menu";

interface Props {}

const MainMenu: React.FC<Props> = () => {
  return (
    <nav className="hidden items-center space-x-2 text-sm font-medium text-gray-800 md:flex">
      {mainMenu.map((item, index) => (
        <MainMenuItem key={index} title={item.title} link={item.link} />
      ))}
    </nav>
  );
};

export default MainMenu;
