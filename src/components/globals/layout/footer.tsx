import React from "react";
import FooterLogo from "../Items/footer-logo";
import FooterNav from "./footer-nav";
import {
  footerAboutUsMenu,
  footerLearnMenu,
  footerProductsMenu,
  footerResourcesMenu,
} from "@/constants/menu";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="text-xs font-medium text-gray-500">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 py-16 md:grid-cols-5">
        <nav className="col-span-2 md:col-span-1">
          <FooterLogo />
        </nav>
        <FooterNav title="Products" menuList={footerProductsMenu} />
        <FooterNav title="Resources" menuList={footerResourcesMenu} />
        <FooterNav title="Learn" menuList={footerLearnMenu} />
        <FooterNav title="About Us" menuList={footerAboutUsMenu} />
      </div>
    </footer>
  );
};

export default Footer;
