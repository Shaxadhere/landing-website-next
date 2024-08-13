import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  link: string;
  className?: string;
}

const MainMenuItem: React.FC<Props> = ({ title, link, className }) => {
  return (
    <Link
      href={link}
      className={cn(
        "rounded px-3 py-2 transition text-gray-100 hover:text-rose-600",
        className
      )}
    >
      {title}
    </Link>
  );
};

export default MainMenuItem;
