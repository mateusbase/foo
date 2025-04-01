import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";
import NewScreen from "@/templates/NewScreen";

const Blog: NextPageWithLayout = () => {
  return (
    <Page title="Blog" description="Oncoclínicas - Blog">
      <NewScreen
        title="Notícias"
        subtitle="Acompanhe as principais notícias sobre oncologia e fique por dentro da participação da Oncoclínicas e de seus especialistas na mídia."
      />
    </Page>
  );
};

export default Blog;
