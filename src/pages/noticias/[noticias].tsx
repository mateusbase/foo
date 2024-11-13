import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";
import NewScreen from "@/templates/NewScreen";

const Blog: NextPageWithLayout = () => {
  return (
    <Page title="Blog" description="Oncoclínicas - Blog">
      <NewScreen />
    </Page>
  );
};

export default Blog;
