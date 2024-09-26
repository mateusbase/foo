import BlogScreen from "@/templates/BlogScreen";
import Page from "@/components/Page";
import { NextPageWithLayout } from "../_app";

const Blog: NextPageWithLayout = () => {
  return (
    <Page title="Blog" description="Oncoclínicas - Blog">
      <BlogScreen />
    </Page>
  );
};

export default Blog;
