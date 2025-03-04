import BaseLayout from "@/components/layout";
import MainSection from "./components/main";

const HomePage = async () => {
  return (
    <BaseLayout isNavbar>
      <MainSection />
    </BaseLayout>
  );
};

export default HomePage;
