import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";
import StudyScreen from "@/templates/StudyScreen";

const Blog: NextPageWithLayout = () => {
  return (
    <Page title="Blog" description="Oncoclínicas - Blog">
      <StudyScreen />
    </Page>
  );
};

export default Blog;
