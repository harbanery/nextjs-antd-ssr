"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarSection from "../custom/navbar";

interface BaseLayoutProps {
  isNavbar?: boolean;
  children: React.ReactNode;
}

const useNavbarScroll = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const targetId = "target-navbar";

    const section = document.getElementById(targetId);

    if (section) {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isFixed;
};

const BaseLayout = ({ isNavbar, children }: BaseLayoutProps) => {
  const pathname = usePathname();
  const isFixed = useNavbarScroll();

  let home = true;
  if (pathname === "/" && isNavbar) {
    home = isFixed;
  }

  return (
    <main className="relative overflow-hidden">
      {isNavbar && <NavbarSection home={!home} />}

      {children}
    </main>
  );
};

export default BaseLayout;
