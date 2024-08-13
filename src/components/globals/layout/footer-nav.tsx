import { MenuItem } from "@/types/data";
import React from "react";
import FooterNavItem from "./footer-nav-item";

interface Props {
  title: string;
  menuList: Array<MenuItem>;
}

const FooterNav: React.FC<Props> = ({ title, menuList }) => {
  return (
    <nav className="flex flex-col items-start space-y-2.5 md:space-y-1.5">
      <h3 className="mb-2 text-black">{title}</h3>
      {menuList.map((item) => (
        <FooterNavItem link={item.link} title={item.title} key={item.link} />
      ))}
    </nav>
  );
};

export default FooterNav;
