import React, { FC } from "react";
import { FireFilled, HomeFilled } from "@ant-design/icons";
import { Button, ConfigProvider, Flex, Menu, Typography } from "antd";
import Link from "next/link";
import { cn } from "@/utils/helpers";
import { globalTheme } from "@/lib/config/theme";

interface NavbarProps {
  home?: boolean;
}

const { Link: AntLink } = Typography;

const navPaths = [
  {
    key: "blog",
    label: "Blog",
    path: "/",
  },
  {
    key: "profile",
    label: "Profile",
    path: "/",
  },
  {
    key: "about",
    label: "About Us",
    path: "/",
  },
];

const NavbarSection: FC<NavbarProps> = ({ home = false }) => {
  const dynamicColorFont = home ? "!text-white" : "!text-[#293134]";

  return (
    <nav className={cn(home ? "home" : "normal", "custom-navbar")}>
      <AntLink href={"/"} target="_self" rel="noopener noreferrer">
        <FireFilled
          width={66.17}
          height={24}
          className={cn(home && "custom-image filter-white", "custom-logo")}
        />
      </AntLink>
      <Menu
        className={cn("custom-menu", "!border-none")}
        mode="horizontal"
        items={navPaths?.map((item) => {
          return {
            key: item.key,
            label: (
              <Link
                href={item.path}
                target={item.key !== "ticket-check" ? "_blank" : "_self"}
                rel={
                  item.key !== "ticket-check"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ),
            className: cn(dynamicColorFont),
          };
        })}
      />
      <Flex gap={16} justify="space-between">
        <Link href={"/"}>
          <Button
            size="middle"
            variant="outlined"
            type="default"
            ghost={home}
            icon={
              <span className={cn(home && "custom-image filter-white")}>
                <HomeFilled />
              </span>
            }
            className={cn(dynamicColorFont, "custom-button")}
          >
            Login
          </Button>
        </Link>
        <Link href={"/"}>
          <Button
            size="middle"
            variant="solid"
            type="primary"
            className="custom-button"
          >
            Register
          </Button>
        </Link>
      </Flex>
    </nav>
  );
};

export default NavbarSection;
