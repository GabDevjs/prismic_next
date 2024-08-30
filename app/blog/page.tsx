import { Layout } from "../../layout";
import { createClient } from "../../../prismicio";
import { PostsPainel } from "../../components/organisms/PostsPainel";
import { LastPost } from "../../components/organisms/LastPosts";

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const socialmedia = await client.getSingle("social_medias");
  const posts = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publish_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      socialmedia,
      navigation,
      posts,
    },
  };
}

export default function Blog({ socialmedia, navigation, posts }) {
  return (
    <Layout
      navigation={navigation.data}
      medias_sociais={socialmedia}
      titlePages="Blog - Mais voip"
    >
      <LastPost post={posts[0]} />
      <PostsPainel posts={posts.filter((_, index) => index != 0)} />
    </Layout>
  );
}
