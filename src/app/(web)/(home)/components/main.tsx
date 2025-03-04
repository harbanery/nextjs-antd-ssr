"use client";

import dashboard from "@/assets/image/dashboard.jpg";
import { Card, Flex, notification, Space, Typography } from "antd";
import FormCustom from "./form";

const { Title, Paragraph } = Typography;

const MainSection = () => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <div>
      {contextHolder}

      <header className="relative w-full h-screen pt-[112px] lg:pt-0 pb-10 lg:pb-0 select-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 36, 94, 0.48), rgba(41, 93, 205, 0.48)), url(${dashboard.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "107.86948% 125.6334%",
          }}
        />

        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        <Flex
          className="h-full"
          gap={214}
          align="center"
          justify="space-evenly"
        >
          <aside>
            <Card
              style={{
                padding: 0,
                margin: 0,
                border: 0,
                backgroundColor: "transparent",
                boxShadow: "none",
                width: "100%",
                maxWidth: "577px",
              }}
              styles={{
                body: {
                  padding: 0,
                },
              }}
            >
              <Space direction="vertical" size={16} className="px-6 lg:px-0">
                <Title className="!text-display-small lg:!text-display-large !text-[#F3F6F6]">
                  Lorem ipsum dolor sit amet.
                </Title>
                <Paragraph className="!text-label-large !text-[#F3F6F6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio recusandae aliquam tempore harum provident quia
                  tempora, nulla quasi accusantium aliquid.
                </Paragraph>
              </Space>
            </Card>
          </aside>
          <aside id="target-navbar">
            <Card
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                width: "379px",
              }}
              styles={{
                header: {
                  backgroundColor: "transparent",
                  justifyContent: "end",
                  borderBottom: 0,
                  padding: 0,
                  margin: 0,
                },
                title: {
                  backgroundColor: "white",
                  display: "block",
                  flex: "none",
                  padding: "16px 48px",
                  borderRadius: "12px 12px 0 0",
                  borderBottom: "0.5px solid #D2D7D9",
                },
                body: {
                  backgroundColor: "white",
                  borderRadius: "0 12px 12px 12px",
                  width: "100%",
                },
              }}
              title={<span className="!text-label-large">Reguler</span>}
              variant="borderless"
              className="font-jakarta"
            >
              <FormCustom api={api} />
            </Card>
          </aside>
        </Flex>
      </header>
    </div>
  );
};
export default MainSection;
