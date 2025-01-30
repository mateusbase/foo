import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";
import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import NewsScreen from "@/templates/NewsScreen";

const Blog: NextPageWithLayout = () => {
  return (
    <Page title="Estudos" description="Oncoclínicas - Estudos">
      <div className="mb-10">
        <NewsScreen />
      </div>
      <MainOptionsActions options={options} rounded="rounded-none" />
    </Page>
  );
};

export default Blog;
