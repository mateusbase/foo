import PostScreen from "@/templates/PostScreen";
import Page from "@/components/Page";

const Posts = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Encontre um Médico"
      description="Lista de posts"
    >
      <PostScreen />
    </Page>
  );
};

export default Posts;
