import { MenuItem } from "@/types/data";
import Link from "next/link";
import React from "react";

interface Props extends MenuItem {
  className?: string;
}

const FooterNavItem: React.FC<Props> = ({ title, link }) => {
  return (
    <Link href={link} className="transition text-hover-200 hover:text-gray-100">
      {title}
    </Link>
  );
};

export default FooterNavItem;
