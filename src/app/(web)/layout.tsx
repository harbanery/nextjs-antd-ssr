import { globalTheme } from "@/lib/config/theme";
import { ConfigProvider } from "antd";

export default function WebLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ConfigProvider theme={globalTheme}>{children}</ConfigProvider>;
}
