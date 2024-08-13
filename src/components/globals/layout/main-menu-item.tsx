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
        "rounded bg-white px-3 py-2 transition hover:bg-gray-100",
        className
      )}
    >
      {title}
    </Link>
  );
};

export default MainMenuItem;
