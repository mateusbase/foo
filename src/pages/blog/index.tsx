import BlogScreen from "@/templates/BlogScreen";
import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";

const Blog: NextPageWithLayout = () => {
  return (
    <Page title="Blog" description="Oncoclínicas - Blog">
      <BlogScreen />
    </Page>
  );
};

export default Blog;
