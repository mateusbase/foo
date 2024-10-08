import BlogScreen from "@/templates/BlogScreen";
import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";
import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";

const Blog: NextPageWithLayout = () => {
  return (
    <Page title="Blog" description="Oncoclínicas - Blog">
      <div className="mb-10">
        <BlogScreen />
      </div>
      <MainOptionsActions options={options} rounded="rounded-none" />
    </Page>
  );
};

export default Blog;
