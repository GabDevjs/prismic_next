import { createClient } from "@/prismicio";

export default async function Post() {
  const client = createClient();

  const blogPost = await client.getByUID("blog", "my-blog-post", {
    fetchLinks: "author.author_name",
  });

  return (
    <main>
      <h1>{blogPost.data.title}</h1>
      <em>{blogPost.data.author_link.data.author_name}</em>
    </main>
  );
}
