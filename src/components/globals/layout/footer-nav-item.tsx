import { MenuItem } from "@/types/data";
import Link from "next/link";
import React from "react";

interface Props extends MenuItem {
  className?: string;
}

const FooterNavItem: React.FC<Props> = ({ title, link }) => {
  return (
    <Link href={link} className="transition hover:text-gray-900">
      {title}
    </Link>
  );
};

export default FooterNavItem;
